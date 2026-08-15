// The book of business the pivot aggregates, plus the pieces of the demo that are not
// framework-specific: column definitions, the initial pivot layout, the heatmap scale and the
// headline figures. Shared by the pivot demo component.

// Deterministic on purpose. A demo whose figures change on every refresh is no use in a
// screenshot, a docs page or a bug report. mulberry32, seeded once.
const createRandom = () => {
    let seed = 0x8F1BBCDC;

    return () => {
        seed = seed + 0x6D2B79F5 | 0;

        let t = Math.imul(seed ^ seed >>> 15, 1 | seed);

        t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;

        return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
};

// Relative market size, so Germany is not the same size as Austria.
const territories = [
    { region: 'EMEA', country: 'Germany', weight: 1.00, owner: 'K. Brandt' },
    { region: 'EMEA', country: 'France', weight: 0.78, owner: 'M. Lefevre' },
    { region: 'EMEA', country: 'United Kingdom', weight: 0.92, owner: 'S. Okafor' },
    { region: 'EMEA', country: 'Netherlands', weight: 0.41, owner: 'J. de Vries' },
    { region: 'EMEA', country: 'Poland', weight: 0.33, owner: 'A. Nowak' },
    { region: 'Americas', country: 'United States', weight: 1.65, owner: 'R. Delgado' },
    { region: 'Americas', country: 'Canada', weight: 0.44, owner: 'T. Beaulieu' },
    { region: 'Americas', country: 'Brazil', weight: 0.37, owner: 'C. Almeida' },
    { region: 'APAC', country: 'Japan', weight: 0.71, owner: 'H. Tanaka' },
    { region: 'APAC', country: 'Australia', weight: 0.39, owner: 'P. Whitlock' },
    { region: 'APAC', country: 'Singapore', weight: 0.28, owner: 'W. Lim' }
];

// List price per unit and gross margin rate. Services and hardware drag the blended margin
// down, which is the point of looking at margin next to revenue.
const productLines = [
    { name: 'Platform Licences', price: 2400, marginRate: 0.79 },
    { name: 'Support & Maintenance', price: 780, marginRate: 0.64 },
    { name: 'Professional Services', price: 1450, marginRate: 0.31 },
    { name: 'Hardware', price: 3100, marginRate: 0.17 }
];

// Share of bookings, and the discount that channel typically carries.
const channels = [
    { name: 'Direct', share: 0.42, discount: 0.03 },
    { name: 'Partner', share: 0.27, discount: 0.19 },
    { name: 'Reseller', share: 0.21, discount: 0.13 },
    { name: 'Online', share: 0.10, discount: 0.00 }
];

const segments = [
    { name: 'Enterprise', share: 0.34, unitsPerDeal: 41 },
    { name: 'Mid-Market', share: 0.41, unitsPerDeal: 12 },
    { name: 'SMB', share: 0.25, unitsPerDeal: 3 }
];

const years = [2024, 2025];
const quarters = ['Q1', 'Q2', 'Q3', 'Q4'];
const seasonality = { Q1: 0.81, Q2: 0.94, Q3: 0.97, Q4: 1.28 };
const growthByYear = { 2024: 1.00, 2025: 1.14 };

const createBookings = () => {
    const random = createRandom();
    const jitter = (spread: number) => 1 - spread + random() * spread * 2;
    const records: any[] = [];

    for (const territory of territories) {
        for (const productLine of productLines) {
            for (const channel of channels) {
                for (const segment of segments) {
                    for (const year of years) {
                        for (const quarter of quarters) {
                            const deals = Math.max(1, Math.round(
                                26 * territory.weight * channel.share * segment.share *
                                seasonality[quarter] * growthByYear[year] * jitter(0.22)));

                            const units = Math.max(1, Math.round(
                                deals * segment.unitsPerDeal * jitter(0.18)));

                            const revenue = Math.round(
                                units * productLine.price * (1 - channel.discount) * jitter(0.06));

                            const cost = Math.round(
                                revenue * (1 - productLine.marginRate) * jitter(0.08));

                            records.push({
                                region: territory.region,
                                country: territory.country,
                                owner: territory.owner,
                                productLine: productLine.name,
                                channel: channel.name,
                                segment: segment.name,
                                year: year,
                                quarter: quarter,
                                deals: deals,
                                units: units,
                                revenue: revenue,
                                cost: cost,
                                margin: revenue - cost
                            });
                        }
                    }
                }
            }
        }
    }

    return records;
};

export const bookings = createBookings();

// What Pivot Mode "off" shows. Kept as functions because switching back has to hand the Grid
// fresh definitions: the pivot replaced columns, columnGroups and dataSource on the way in.
export const flatColumns = () => [
    { label: 'Region', dataField: 'region', dataType: 'string', columnGroup: 'territory' },
    { label: 'Country', dataField: 'country', dataType: 'string', columnGroup: 'territory' },
    { label: 'Account Manager', dataField: 'owner', dataType: 'string', width: 150, columnGroup: 'territory' },
    { label: 'Product Line', dataField: 'productLine', dataType: 'string', width: 170, columnGroup: 'deal' },
    { label: 'Channel', dataField: 'channel', dataType: 'string', columnGroup: 'deal' },
    { label: 'Segment', dataField: 'segment', dataType: 'string', columnGroup: 'deal' },
    { label: 'Year', dataField: 'year', dataType: 'number', width: 80, columnGroup: 'period' },
    { label: 'Quarter', dataField: 'quarter', dataType: 'string', width: 90, columnGroup: 'period' },
    { label: 'Deals', dataField: 'deals', dataType: 'number', width: 90, columnGroup: 'result' },
    { label: 'Units', dataField: 'units', dataType: 'number', width: 90, columnGroup: 'result' },
    { label: 'Revenue', dataField: 'revenue', dataType: 'number', cellsFormat: 'c0', columnGroup: 'result' },
    { label: 'Cost of Sales', dataField: 'cost', dataType: 'number', cellsFormat: 'c0', columnGroup: 'result' },
    { label: 'Gross Margin', dataField: 'margin', dataType: 'number', cellsFormat: 'c0', columnGroup: 'result' }
];

export const flatColumnGroups = () => [
    { label: 'Territory', name: 'territory' },
    { label: 'Deal', name: 'deal' },
    { label: 'Period', name: 'period' },
    { label: 'Result', name: 'result' }
];

// The fields the designer offers, under the names the business uses rather than the ones the
// data source happens to use.
export const designerFields = [
    { dataField: 'region', label: 'Region', dataType: 'string' },
    { dataField: 'country', label: 'Country', dataType: 'string' },
    { dataField: 'owner', label: 'Account Manager', dataType: 'string' },
    { dataField: 'productLine', label: 'Product Line', dataType: 'string' },
    { dataField: 'channel', label: 'Sales Channel', dataType: 'string' },
    { dataField: 'segment', label: 'Customer Segment', dataType: 'string' },
    { dataField: 'year', label: 'Year', dataType: 'string' },
    { dataField: 'quarter', label: 'Quarter', dataType: 'string' },
    { dataField: 'revenue', label: 'Revenue', dataType: 'number' },
    { dataField: 'margin', label: 'Gross Margin', dataType: 'number' },
    { dataField: 'cost', label: 'Cost of Sales', dataType: 'number' },
    { dataField: 'units', label: 'Units', dataType: 'number' },
    { dataField: 'deals', label: 'Closed Deals', dataType: 'number' }
];

export const initialPivot = () => ({
    rows: ['region', 'country', 'productLine'],
    columns: ['year', 'quarter'],
    values: [{
        dataField: 'revenue',
        summary: 'sum',
        label: 'Revenue',
        formatSettings: { formatString: 'c0' }
    }],
    fields: designerFields,
    grandTotalRow: true,
    grandTotalColumn: true,
    rowSubtotals: true
});

// ---------------------------------------------------------------- heatmap
// A colour scale over the value cells. conditionalFormatting takes discrete rules with one
// colour each, so the gradient is built as a run of narrow 'between' bands.
//
// Painting cell.background from onCellRender instead is a trap: assigning onCellRender at all
// enables a branch that replaces the formatted value with cell.value whenever the two differ,
// and they differ routinely for a pivot because a null intersection is rewritten to 0.
const BANDS = 9;

const COLD = [235, 245, 251], WARM = [91, 155, 213];
const BAD = [214, 89, 76], MID = [239, 190, 96], GOOD = [96, 173, 112];

// Six-digit hex, not rgb(). conditionalFormatting validates highlight against /^#[0-9A-F]{6}$/
// and silently drops anything else, and a dropped colour makes the formatter return nothing for
// that column, which the renderer then crashes on.
const mix = (from: number[], to: number[], t: number) => '#' + from
    .map((channel: number, i: number) => Math.round(channel + (to[i] - channel) * t)
        .toString(16).padStart(2, '0'))
    .join('');

export const MARGIN_FLOOR = 0.2, MARGIN_TARGET = 0.45, MARGIN_CEILING = 0.7;

// A margin percentage is read against a target, not against the other cells, so it gets a
// fixed diverging scale.
const marginColour = (value: number) => {
    if (value <= MARGIN_TARGET) {
        const t = Math.max(0, (value - MARGIN_FLOOR) / (MARGIN_TARGET - MARGIN_FLOOR));

        return mix(BAD, MID, Math.min(1, t));
    }

    const t = Math.min(1, (value - MARGIN_TARGET) / (MARGIN_CEILING - MARGIN_TARGET));

    return mix(MID, GOOD, t);
};

// Ranges come from the leaf rows only. Including subtotals and the grand total would put the
// top of the scale an order of magnitude above any real cell, and every leaf would come out
// the same pale shade.
export const computeHeatRanges = (model: any): any => {
    const ranges: any = {};

    if (!model) { return ranges; }

    for (const id of model.valueColumnIds) {
        let min = Infinity, max = -Infinity;

        for (const row of model.rows) {
            if (row._pivotKind !== 'leaf') { continue; }

            const value = row[id];

            if (typeof value !== 'number' || !isFinite(value)) { continue; }

            min = Math.min(min, value);
            max = Math.max(max, value);
        }

        if (min <= max) { ranges[id] = { min: min, max: max }; }
    }

    return ranges;
};

// One band per slice of a column's leaf range. The top band stops exactly at the leaf maximum,
// so subtotals and the grand total match no rule at all and keep the row styling that marks
// them out.
export const buildHeatmapRules = (model: any, ranges: any): any => {
    if (!model) { return null; }

    const rules: any[] = [];

    for (const id of model.valueColumnIds) {
        const range = ranges[id];

        if (!range) { continue; }

        const column = model.columns.find((candidate: any) => candidate.dataField === id),
            isMargin = column && (column.label || '').indexOf('Margin %') === 0,
            from = isMargin ? 0 : range.min,
            to = isMargin ? 1 : range.max,
            span = to - from;

        for (let band = 0; band < BANDS; band++) {
            const low = from + span * band / BANDS,
                high = from + span * (band + 1) / BANDS,
                middle = (low + high) / 2;

            rules.push({
                column: id,
                condition: 'between',
                firstValue: low,
                secondValue: high,
                highlight: isMargin ? marginColour(middle) : mix(COLD, WARM, (band + 0.5) / BANDS)
            });
        }
    }

    return rules.length > 0 ? rules : null;
};

// ---------------------------------------------------------------- headline numbers
export const money = (value: number) => '$' + Math.round(value).toLocaleString('en-US');

export const compact = (value: number) => {
    const millions = value / 1e6;

    return '$' + (millions >= 100 ? Math.round(millions) : millions.toFixed(1)) + 'M';
};

// Structured rather than pre-rendered HTML, so each framework renders it its own way.
export const computeKpis = (records: any[]): any => {
    const total = (field: string, filter?: any) => records
        .filter(filter || (() => true))
        .reduce((sum: number, booking: any) => sum + booking[field], 0);

    const revenue = total('revenue'),
        margin = total('margin'),
        deals = total('deals'),
        current = total('revenue', (booking: any) => booking.year === 2025),
        previous = total('revenue', (booking: any) => booking.year === 2024);

    return {
        revenue: revenue,
        margin: margin,
        deals: deals,
        current: current,
        previous: previous,
        growth: previous === 0 ? 0 : (current - previous) / previous,
        marginRate: revenue === 0 ? 0 : margin / revenue,
        averageDeal: deals === 0 ? 0 : revenue / deals,
        count: records.length,
        filtered: records.length !== bookings.length
    };
};

// The bookings the pivot is actually aggregating. Reading `bookings` directly would leave the
// headline numbers stating the unfiltered total while the table below shows a subset, which is
// the one thing a summary strip must never do. FilterGroup.evaluate is the same evaluator the
// Grid applies, so the two cannot disagree.
export const activeBookings = (grid: any): any[] => {
    const filters = grid && grid.getPivotFilters ? grid.getPivotFilters() : [];

    if (!filters || filters.length === 0) { return bookings; }

    return bookings.filter((booking: any) =>
        filters.every((entry: any) => entry.filter.evaluate(booking[entry.dataField])));
};
