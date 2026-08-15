# Smart UI for Angular - Data Grid Pivot

Standalone StackBlitz example of the Grid's native pivot view with a docked
`smart-pivot-panel` designer, a colour-scaled heatmap over the value cells, and a
filter-aware summary strip.

Open the folder in [StackBlitz](https://stackblitz.com/), or run it locally:

```sh
npm install
npm start
```

## Requires a published build with pivot support

This example pins `smart-webcomponents-angular@^27.0.0`. **The pivot view is not present in
earlier releases** - the component only gained `[pivot]`, `[view]="'pivot'"`,
`(onPivotChange)`, `refreshPivot()`, `getPivotModel()` and `createPivotDesigner()` in 27.x.

If it is run against an older package the demo does not crash: the Grid renders the flat
bookings quite happily, which looks like a working demo that simply is not a pivot. The
component guards against exactly that and writes *"Pivot module not loaded"* into the status
bar instead. If you see that message, the installed package predates pivot support.

## Angular version

Pinned to Angular 18, matching the toolchain the product's own Angular demo project builds
with. Newer Angular versions are supported by the library; bump `@angular/*`,
`@angular-devkit/build-angular` and `@angular/cli` together if you want a later one.

## `ViewEncapsulation.None` is required, not incidental

`AppComponent` sets `encapsulation: ViewEncapsulation.None`. The pivot styling targets rows and
`smart-grid-cell` elements the Grid creates **at runtime**, and Angular's default emulated
encapsulation rewrites selectors to match `_ngcontent` attributes it only stamps onto elements
present in the template at compile time. With encapsulation left on, the group rows, the grand
total and the heatmap tints silently do not get styled. Removing that line looks harmless and
breaks the demo's appearance.

## What it shows

- `[view]="'pivot'"` as a **native** Grid view, so cell-range selection, clipboard, conditional
  formatting and export keep working on the aggregated result.
- `createPivotDesigner()` docking `smart-pivot-panel` beside the Grid. Drag a field between the
  Rows / Columns / Values wells, or right-click one for the same moves without dragging.
- The panel's **Filters** tab. Filters run *before* aggregation, so totals are recomputed from
  the surviving records rather than masked - which is why the summary strip moves with them.
- Row groups as ordinary tree rows, and a collapsible banded column axis.
- Switching pivot off and restoring the flat view, which the application does explicitly
  because the pivot replaced `columns`, `columnGroups` and `dataSource` on the way in.

## Files

| File | Purpose |
| --- | --- |
| `src/app/app.component.ts` | The demo component |
| `src/app/app.component.html` | Template with the Grid bindings and the summary strip |
| `src/app/bookings.ts` | Deterministic data generator, pivot layout, heatmap scale, KPI maths |
| `src/app/app.component.css` | Pivot row, heatmap and layout styling |
| `src/styles.css` | Page chrome, supplied by the demo site in the product docs |

The data is generated from a model - territory size, list price, channel discount, segment deal
size, quarterly seasonality, year-on-year growth - so the pivot shows the shapes a real book of
business does. It is seeded once with mulberry32, so the 4,224 records are identical on every
run; a demo whose figures change on refresh is no use in a screenshot or a bug report.
