import { DataGrid, ValueGetterParams } from '@material-ui/data-grid';

type InventoryTableProps = {
    rows: any[],
}

const columns: any[] = [
    { field: 'id', headerName: 'ID', flex: 1 },
    { field: 'name', headerName: 'Nazwa', flex: 1 },
    { field: 'model', headerName: 'Model', flex: 1 },
    { field: 'price', headerName: 'Cena', type: 'number', flex: 1 },
    { field: 'quantity', headerName: 'Sztuk', type: 'number', flex: 1 },
    {
        field: 'summary', headerName: 'Razem', type: 'number', valueGetter: (params: ValueGetterParams) =>
            `${params.getValue('quantity') || ''}`,
    },
    { field: 'source', headerName: 'Źródło', type: 'string', flex: 1 },
    { field: 'state', headerName: 'Stan', type: 'string', flex: 1 },
    { field: 'info', headerName: 'Informacje', type: 'string', flex: 1 }
];

const InventoryTable = ({ rows }: InventoryTableProps) => {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
        </div>
    )
}

export default InventoryTable;