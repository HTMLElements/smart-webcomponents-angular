import { AfterViewInit, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent, GridModule } from 'smart-webcomponents-angular/grid';
import { SwitchButtonModule } from 'smart-webcomponents-angular/switchbutton';
// Registers smart-pivot-panel, the element createPivotDesigner mounts. Without it the Grid
// still pivots, but there is no designer to dock beside it.
import { PivotTableModule } from 'smart-webcomponents-angular/pivottable';

import {
    activeBookings, bookings, buildHeatmapRules, compact, computeHeatRanges, computeKpis,
    flatColumnGroups, flatColumns, initialPivot, money, MARGIN_TARGET
} from './bookings';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, GridModule, SwitchButtonModule, PivotTableModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    // The pivot row styling targets rows and cells the Grid creates at runtime. Emulated
    // encapsulation rewrites the selectors to match _ngcontent attributes, which Angular only
    // stamps onto elements present in the template at compile time - so scoped styles would
    // never reach a pivot row. None is required here, not a shortcut.
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit {
    @ViewChild('grid', { read: GridComponent, static: false }) grid!: GridComponent;
    @ViewChild('designerHost', { static: false }) designerHost!: ElementRef<HTMLDivElement>;

    bookings = bookings;
    columns = flatColumns();
    columnGroups = flatColumnGroups();
    pivot = initialPivot();
    view = 'pivot';

    appearance = { showRowHeader: false, allowRowToggleAnimation: false };
    behavior = { columnResizeMode: 'growAndShrink' };
    selection = { enabled: true, allowCellSelection: true, mode: 'extended' };
    clipboard = { enabled: true };
    dataExport = { fileName: 'bookings-pivot', header: true };
    layout = { rowHeight: 32 };

    status = '';
    kpis: any = computeKpis(bookings);
    marginTarget = MARGIN_TARGET;
    totalBookings = bookings.length;

    money = money;
    compact = compact;

    private expandedOnLoad = false;

    // Every pivot row carries _pivotKind and _pivotDepth, so region rows, country rows, leaves
    // and the grand total can be styled apart. onRowClass is recycle-safe, unlike setting
    // attributes during render.
    onRowClass = (visibleIndex: number, data: any) => data && data._pivotKind
        ? 'pivot-' + data._pivotKind + ' pivot-depth-' + (data._pivotDepth || 0)
        : '';

    ngAfterViewInit(): void {
        const element: any = this.grid;

        // Fail loudly. If the pivot module is missing the Grid renders the flat data perfectly
        // happily, so without this the page looks fine and simply is not a pivot.
        if (typeof element.refreshPivot !== 'function') {
            this.status = 'Pivot module not loaded.';
            return;
        }

        // Setting view during load may run before the Grid has rendered, so build the pivot
        // again once it has. refreshPivot is idempotent.
        element.nativeElement.whenRendered(() => {
            element.refreshPivot();

            // Created after render so the host div exists and has a height to size against.
            if (!element.createPivotDesigner(this.designerHost.nativeElement)) {
                this.status = 'smart-pivot-panel is not registered.';
            }
        });
    }

    onPivotChange(event: any): void {
        // The scale belongs to the numbers currently on screen, so it moves with them.
        this.applyHeatmap();

        // Expanded on load, so the report opens showing its detail rather than three region
        // rows. Deferred a frame: setPivotModel replaces the data source inside a
        // begin/endUpdate, and endUpdate schedules the render that builds the tree. Only the
        // first build expands, or the designer would undo the user's collapses each time.
        if (!this.expandedOnLoad) {
            this.expandedOnLoad = true;
            requestAnimationFrame(() => (this.grid as any).expandAllRows());
        }

        this.status = this.totalBookings.toLocaleString() + ' bookings aggregated into '
            + event.detail.rows + ' rows and ' + event.detail.columns + ' columns.';
    }

    // The Filters tab narrows the bookings before aggregation, so the totals are recomputed
    // from what survives rather than masked.
    onPivotFilter(event: any): void {
        const filters = event.detail.filters;

        this.kpis = computeKpis(activeBookings(this.grid));

        this.status = filters.length === 0
            ? 'Filters cleared - all ' + this.totalBookings.toLocaleString() + ' bookings.'
            : 'Filtered on ' + filters.map((entry: any) =>
                entry.dataField + ' ' + entry.filter.toString()).join(' and ')
            + ' - totals recomputed from the bookings that pass.';
    }

    onPivotDesignerChange(event: any): void {
        const detail = event.detail;

        this.status = 'Rows: ' + (detail.rows.join(' > ') || 'none')
            + '  |  Columns: ' + (detail.columns.join(' > ') || 'none')
            + '  |  Values: ' + (detail.values.map((value: any) =>
                (typeof value.summary === 'function' ? 'custom' : value.summary)
                + '(' + value.dataField + ')').join(', ') || 'none');
    }

    onColumnGroupCollapse(event: any): void {
        this.status = (event.detail.collapsed ? 'Collapsing' : 'Expanding')
            + ' column group ' + event.detail.name;
    }

    // The pivot replaces columns, columnGroups and dataSource, so switching off puts the flat
    // view back rather than assuming the Grid will.
    onPivotModeChange(event: any): void {
        const element: any = this.grid;
        const on = event.detail && event.detail.value !== undefined ? event.detail.value : true;

        if (on) {
            element.view = 'pivot';
            element.refreshPivot();
            element.expandAllRows();
            this.status = 'Pivot mode on.';
            return;
        }

        // One batch: view, columns, groups and data are four separate re-renders otherwise.
        element.beginUpdate();

        try {
            element.view = 'grid';
            element.columns = flatColumns();
            element.columnGroups = flatColumnGroups();
            element.dataSource = bookings;
        }
        finally {
            element.endUpdate();
        }

        this.status = 'Pivot mode off - ' + this.totalBookings.toLocaleString()
            + ' bookings, one row each. The wells still work; switch back on to see the result.';
    }

    private applyHeatmap(): void {
        const element: any = this.grid;
        const model = element.getPivotModel();

        element.conditionalFormatting = buildHeatmapRules(model, computeHeatRanges(model));
    }
}
