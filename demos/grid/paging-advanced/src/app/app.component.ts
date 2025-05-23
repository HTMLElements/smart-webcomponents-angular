import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { CheckBoxComponent, CheckBox } from '@smart-webcomponents-angular/checkbox';
import { GridComponent, GridColumn, DataAdapter, Smart } from '@smart-webcomponents-angular/grid';
import { GetData } from '../assets/data';

import { CheckBoxModule } from '@smart-webcomponents-angular/checkbox';import { GridModule } from '@smart-webcomponents-angular/grid';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  CheckBoxModule, GridModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('showBottomPager', { read: CheckBoxComponent, static: false }) showBottomPager!: CheckBoxComponent;
    @ViewChild('changePageSizeSelectorPosition', { read: CheckBoxComponent, static: false }) changePageSizeSelectorPosition!: CheckBoxComponent;
    @ViewChild('changePageIndexSelectorsCount', { read: CheckBoxComponent, static: false }) changePageIndexSelectorsCount!: CheckBoxComponent;
    @ViewChild('changeNavigationButtonsPosition', { read: CheckBoxComponent, static: false }) changeNavigationButtonsPosition!: CheckBoxComponent;
    @ViewChild('changeNavigationInputPosition', { read: CheckBoxComponent, static: false }) changeNavigationInputPosition!: CheckBoxComponent;
    @ViewChild('changeSummaryPosition', { read: CheckBoxComponent, static: false }) changeSummaryPosition!: CheckBoxComponent;
    @ViewChild('showPagerSummary', { read: CheckBoxComponent, static: false }) showPagerSummary!: CheckBoxComponent;
    @ViewChild('showTopPager', { read: CheckBoxComponent, static: false }) showTopPager!: CheckBoxComponent;
    @ViewChild('showPageSizeSelector', { read: CheckBoxComponent, static: false }) showPageSizeSelector!: CheckBoxComponent;
    @ViewChild('showPrevNextNavigationButtons', { read: CheckBoxComponent, static: false }) showPrevNextNavigationButtons!: CheckBoxComponent;
    @ViewChild('showFirstLastNavigationButtons', { read: CheckBoxComponent, static: false }) showFirstLastNavigationButtons!: CheckBoxComponent;
    @ViewChild('showNavigationButtonsAsLabels', { read: CheckBoxComponent, static: false }) showNavigationButtonsAsLabels!: CheckBoxComponent;
    @ViewChild('showNavigationInput', { read: CheckBoxComponent, static: false }) showNavigationInput!: CheckBoxComponent;
    @ViewChild('showPagerIndexSelectors', { read: CheckBoxComponent, static: false }) showPagerIndexSelectors!: CheckBoxComponent;
    @ViewChild('showPagerEllipsis', { read: CheckBoxComponent, static: false }) showPagerEllipsis!: CheckBoxComponent;
    @ViewChild('grid', { read: GridComponent, static: false }) grid!: GridComponent;

    paging = {
        enabled: true,
        pageSize: 10,
        pageIndex: 1
    }
    pager = {
        visible: true,
        pageSizeSelector: {
            visible: true
        },
        pageIndexSelectors: {
            dataSource: 3
        }
    }
    dataSource = new Smart.DataAdapter({
        virtualDataSourceLength: 5000,
        virtualDataSourceCache: true,
        virtualDataSource: function (resultCallbackFunction: any, details: any) {
            setTimeout(function () {
                resultCallbackFunction({
                    dataSource: GetData(details.first, details.last)
                });
            }, 100);
        },
        dataFields: [
            'id: number',
            'firstName: string',
            'lastName: string',
            'productName: string',
            'quantity: number',
            'price: number',
            'total: number'
        ]
    })
    columns = [
        'id',
        {
            label: 'First Name', dataField: 'firstName'
        },
        { label: 'Last Name', dataField: 'lastName' },
        { label: 'Product', dataField: 'productName' },
        { label: 'Quantity', dataField: 'quantity' },
        { label: 'Unit Price', dataField: 'price', cellsFormat: 'c2' },
        { label: 'Total', dataField: 'total', cellsFormat: 'c2' }
    ] as GridColumn[]

    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        const that = this;

        that.grid.nativeElement.whenRendered(() => {
            that.init();
        });
    }

    init(): void {
        // init code.

        const that = this;
        const checkBoxes = document.querySelectorAll('smart-check-box');
        for (let i = 0; i < checkBoxes.length; i++) {
            const checkBox = checkBoxes[i];
            checkBox.addEventListener('change', function (event) {
                const checkBox = event.target as CheckBox;

                switch (checkBox.id) {
                    case 'showPagerSummary':
                        if (!that.grid.pager.summary) { break }
                        that.grid.pager.summary.visible = checkBox.checked;
                        that.changeSummaryPosition.disabled = !checkBox.checked;
                        break;
                    case 'showTopPager':
                    case 'showBottomPager':
                        const isTopPagerVisible = that.showTopPager.checked;
                        const isBottomPagerVisible = that.showBottomPager.checked;
                        that.grid.pager.visible = true;
                        if (isTopPagerVisible && isBottomPagerVisible) {
                            that.grid.pager.position = 'both';
                        }
                        else if (isTopPagerVisible) {
                            that.grid.pager.position = 'near';
                        }
                        else if (isBottomPagerVisible) {
                            that.grid.pager.position = 'far';
                        }
                        else {
                            that.grid.pager.visible = false;
                        }
                        break;
                    case 'changePageIndexSelectorsCount':
                        if (!that.grid.pager.pageIndexSelectors) { break }

                        that.grid.pager.pageIndexSelectors.dataSource = checkBox.checked ? 3 : 5;
                        break;
                    case 'showPageSizeSelector':
                        if (!that.grid.pager.pageSizeSelector) { break }

                        that.grid.pager.pageSizeSelector.visible = checkBox.checked;
                        that.changePageSizeSelectorPosition.disabled = !checkBox.checked;
                        break;
                    case 'changePageSizeSelectorPosition':
                        if (!that.grid.pager.pageSizeSelector) { break }

                        that.grid.pager.pageSizeSelector.position = checkBox.checked ? 'near' : 'far';
                        break;
                    case 'changeSummaryPosition':
                        if (!that.grid.pager.summary) { break }

                        that.grid.pager.summary.position = checkBox.checked ? 'near' : 'far';
                        break;
                    case 'changeNavigationInputPosition':
                        if (!that.grid.pager.navigationInput) { break }

                        that.grid.pager.navigationInput.position = checkBox.checked ? 'near' : 'far';
                        break;
                    case 'changeNavigationButtonsPosition':
                        if (!that.grid.pager.navigationButtons) { break }

                        that.grid.pager.navigationButtons.position = checkBox.checked ? 'near' : 'far';
                        break;
                    case 'showPrevNextNavigationButtons':
                        if (!that.grid.pager.navigationButtons?.prevNextButtons) { break }

                        that.grid.pager.navigationButtons.prevNextButtons.visible = checkBox.checked;
                        if (!that.grid.pager.navigationButtons.prevNextButtons.visible && !that.grid.pager.navigationButtons?.firstLastButtons?.visible) {
                            that.changeNavigationButtonsPosition.disabled = true;
                            that.showNavigationButtonsAsLabels.disabled = true;
                        }
                        else {
                            that.changeNavigationButtonsPosition.disabled = false;
                            that.showNavigationButtonsAsLabels.disabled = false;
                        }
                        break;
                    case 'showFirstLastNavigationButtons':
                        if (!that.grid.pager.navigationButtons?.firstLastButtons) { break }

                        that.grid.pager.navigationButtons.firstLastButtons.visible = checkBox.checked;
                        if (!that.grid.pager.navigationButtons.prevNextButtons?.visible && !that.grid.pager.navigationButtons.firstLastButtons.visible) {
                            that.changeNavigationButtonsPosition.disabled = true;
                            that.showNavigationButtonsAsLabels.disabled = true;
                        }
                        else {
                            that.changeNavigationButtonsPosition.disabled = false;
                            that.showNavigationButtonsAsLabels.disabled = false;
                        }
                        break;
                    case 'showNavigationButtonsAsLabels':
                        if (!that.grid.pager.navigationButtons?.labels) { break }

                        that.grid.pager.navigationButtons.labels.visible = checkBox.checked;
                        break;
                    case 'showNavigationInput':
                        if (!that.grid.pager.navigationInput) { break }

                        that.changeNavigationInputPosition.disabled = !checkBox.checked;
                        that.grid.pager.navigationInput.visible = checkBox.checked;
                        break;
                    case 'showPagerIndexSelectors':
                        if (!that.grid.pager.pageIndexSelectors) { break }

                        that.grid.pager.pageIndexSelectors.visible = checkBox.checked;
                        break;
                    case 'showPagerEllipsis':
                        that.grid.pager.autoEllipsis = checkBox.checked ? 'both' : 'none';
                        break;
                }
            });
        }


    }
}