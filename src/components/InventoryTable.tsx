import { DataGrid, ValueGetterParams, GridColDef, GridCellParams, GridColParams } from '@material-ui/data-grid';
import PlGridLocale from '../locale/DataGridLocale';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import styled from 'styled-components';

const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin:auto;
`

type InventoryTableProps = {
    rows: any[],
}

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', flex: 1, align: 'center', headerAlign: 'center', renderHeader: (params: GridColParams) => { return <b>ID</b> } },
    { field: 'name', headerName: 'Nazwa', flex: 1, align: 'center', headerAlign: 'center', renderHeader: (params: GridColParams) => { return <b>Nazwa</b> } },
    { field: 'model', headerName: 'Model', flex: 1, align: 'center', headerAlign: 'center', renderHeader: (params: GridColParams) => { return <b>Model</b> } },
    { field: 'price', headerName: 'Cena', type: 'number', flex: 1, align: 'center', headerAlign: 'center', renderHeader: (params: GridColParams) => { return <b>Cena</b> } },
    { field: 'quantity', headerName: 'Sztuk', type: 'number', flex: 1, align: 'center', headerAlign: 'center', renderHeader: (params: GridColParams) => { return <b>Sztuk</b> } },
    {
        field: 'summary', headerName: 'Razem', type: 'number', flex: 1, align: 'center', headerAlign: 'center', renderHeader: (params: GridColParams) => { return <b>Razem</b> }, valueGetter: (params: ValueGetterParams) =>
            `${params.getValue('quantity') || ''}`,
    },
    { field: 'source', headerName: 'Źródło', type: 'string', flex: 1, align: 'center', headerAlign: 'center', renderHeader: (params: GridColParams) => { return <b>Źródło</b> } },
    { field: 'state', headerName: 'Stan', type: 'string', flex: 1, align: 'center', headerAlign: 'center', renderHeader: (params: GridColParams) => { return <b>Stan</b> } },
    { field: 'info', headerName: 'Informacje', type: 'string', flex: 1, align: 'center', headerAlign: 'center', renderHeader: (params: GridColParams) => { return <b>Informacje</b> } },
    { field: 'group', headerName: 'Grupa', type: 'string', flex: 1, align: 'center', headerAlign: 'center', renderHeader: (params: GridColParams) => { return <b>Grupa</b> } },
    {
        field: '', headerName: 'Operacje', sortable: false, disableClickEventBubbling: true, flex: 1, align: 'center', headerAlign: 'center', renderHeader: (params: GridColParams) => { return <b>Operacje</b> }, renderCell: (params: GridCellParams) => {
            return (
                <ButtonsContainer>
                    <IconButton color="primary" aria-label="edit icon" ><EditIcon /></IconButton>
                    <IconButton color="secondary" aria-label="edit icon" ><DeleteIcon /></IconButton>
                </ButtonsContainer>
            )
        }
    }
];

const InventoryTable = ({ rows }: InventoryTableProps) => {
    return (
        <div style={{ height: 700, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={10}
                localeText={PlGridLocale}
            />
        </div>
    )
}

export default InventoryTable;