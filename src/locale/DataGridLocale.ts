import { GridLocaleText } from "@material-ui/data-grid";

const GRID_PL_LOCALE: GridLocaleText = {
    // Root
    rootGridLabel: 'grid',
    noRowsLabel: 'No rows',
    errorOverlayDefaultLabel: 'An error occurred.',

    // Density selector toolbar button text
    toolbarDensity: 'Density',
    toolbarDensityLabel: 'Density',
    toolbarDensityCompact: 'Compact',
    toolbarDensityStandard: 'Standard',
    toolbarDensityComfortable: 'Comfortable',

    // Columns selector toolbar button text
    toolbarColumns: 'Columns',
    toolbarColumnsLabel: 'Select columns',

    // Filters toolbar button text
    toolbarFilters: 'Filtry',
    toolbarFiltersLabel: 'Pokaż filtry',
    toolbarFiltersTooltipHide: 'Ukryj filtry',
    toolbarFiltersTooltipShow: 'Pokaż filtry',
    toolbarFiltersTooltipActive: (count) =>
        count !== 1 ? `${count} aktywne filtry` : `${count} aktywny filtr`,

    // Export selector toolbar button text
    toolbarExport: 'Export',
    toolbarExportLabel: 'Export',
    toolbarExportCSV: 'Download as CSV',

    // Columns panel text
    columnsPanelTextFieldLabel: 'Znajdź kolumnę',
    columnsPanelTextFieldPlaceholder: 'Nazwa kolumny',
    columnsPanelDragIconLabel: 'Reorder column',
    columnsPanelShowAllButton: 'Pokaż wszystkie',
    columnsPanelHideAllButton: 'Ukryj wszystkie',

    // Filter panel text
    filterPanelAddFilter: 'Dodaj filtr',
    filterPanelDeleteIconLabel: 'Usuń',
    filterPanelOperators: 'Operator',
    filterPanelOperatorAnd: 'i',
    filterPanelOperatorOr: 'lub',
    filterPanelColumns: 'Kolumny',
    filterPanelInputLabel: 'Wartości',
    filterPanelInputPlaceholder: 'Filtruj wartości',

    // Filter operators text
    filterOperatorContains: 'Zawiera',
    filterOperatorEquals: 'Jest równy',
    filterOperatorStartsWith: 'Zaczyna się od',
    filterOperatorEndsWith: 'Kończy się na',
    filterOperatorIs: 'is',
    filterOperatorNot: 'is not',
    filterOperatorAfter: 'is after',
    filterOperatorOnOrAfter: 'is on or after',
    filterOperatorBefore: 'is before',
    filterOperatorOnOrBefore: 'is on or before',

    // Column menu text
    columnMenuLabel: 'Menu',
    columnMenuShowColumns: 'Pokaż kolumny',
    columnMenuFilter: 'Filtruj',
    columnMenuHideColumn: 'Ukryj',
    columnMenuUnsort: 'Wyłącz sortowanie',
    columnMenuSortAsc: 'Sortuj rosnąco',
    columnMenuSortDesc: 'Sortuj malejąco',

    // Column header text
    columnHeaderFiltersTooltipActive: (count) =>
        count !== 1 ? `${count} aktywne filtry` : `${count} aktywny filtr`,
    columnHeaderFiltersLabel: 'Pokaż filtry',
    columnHeaderSortIconLabel: 'Sortuj',

    // Rows selected footer text
    footerRowSelected: (count) =>
        count !== 1
            ? `${count.toLocaleString()} zaznaczonych wierszy`
            : `${count.toLocaleString()} Zaznaczono wiersz`,

    // Total rows footer text
    footerTotalRows: 'Zaznaczono Wierszy:',
}

export default GRID_PL_LOCALE;