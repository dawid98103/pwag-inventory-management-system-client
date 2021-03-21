import { DataGrid, ValueGetterParams, GridColDef, GridCellParams } from '@material-ui/data-grid';
import DataGridLocale from '../locale/DataGridLocale';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';

type InventoryTableProps = {
    rows: any[],
}

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', flex: 1, align: 'center', headerAlign: 'center' },
    { field: 'name', headerName: 'Nazwa', flex: 1, align: 'center', headerAlign: 'center' },
    { field: 'model', headerName: 'Model', flex: 1, align: 'center', headerAlign: 'center' },
    { field: 'price', headerName: 'Cena', type: 'number', flex: 1, align: 'center', headerAlign: 'center' },
    { field: 'quantity', headerName: 'Sztuk', type: 'number', flex: 1, align: 'center', headerAlign: 'center' },
    {
        field: 'summary', headerName: 'Razem', type: 'number', align: 'center', headerAlign: 'center', valueGetter: (params: ValueGetterParams) =>
            `${params.getValue('quantity') || ''}`,
    },
    { field: 'source', headerName: 'Źródło', type: 'string', flex: 1, align: 'center', headerAlign: 'center' },
    { field: 'state', headerName: 'Stan', type: 'string', flex: 1, align: 'center', headerAlign: 'center' },
    { field: 'info', headerName: 'Informacje', type: 'string', flex: 1, align: 'center', headerAlign: 'center' },
    {
        field: '', headerName: 'Operacje', sortable: false, disableClickEventBubbling: true, flex: 1, align: 'center', headerAlign: 'center', renderCell: (params: GridCellParams) => {
            return <IconButton color="primary" aria-label="edit icon" component="span"><EditIcon /></IconButton>
        }
    }
];

const InventoryTable = ({ rows }: InventoryTableProps) => {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                localeText={DataGridLocale}
            />
        </div>
    )
}

export default InventoryTable;