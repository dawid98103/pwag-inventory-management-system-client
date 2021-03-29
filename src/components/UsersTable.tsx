import { DataGrid, GridColDef, GridColParams } from '@material-ui/data-grid';
import PlGridLocale from '../locale/DataGridLocale';
import styled from 'styled-components';

const DataGridContainer = styled.div`
    height: 500px;
    width: 100%;
`

type InventoryTableProps = {
    rows: any[],
    refreshData: () => void
}

const InventoryTable = ({ rows, refreshData }: InventoryTableProps) => {
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', flex: 1, align: 'center', headerAlign: 'center', renderHeader: (params: GridColParams) => { return <b>ID</b> } },
        { field: 'username', headerName: 'Nazwa', flex: 2, align: 'center', headerAlign: 'center', renderHeader: (params: GridColParams) => { return <b>Nazwa użytkownika</b> } },
        { field: 'role', headerName: 'Rola', flex: 2, align: 'center', headerAlign: 'center', renderHeader: (params: GridColParams) => { return <b>Rola</b> } },
        { field: 'lastUpdated', headerName: 'Ostatnia aktualizacja', type: 'date', flex: 1, align: 'center', headerAlign: 'center', renderHeader: (params: GridColParams) => { return <b>Ostatnia aktualizacja</b> } }
    ];

    return (
        <DataGridContainer>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={10}
                loading={rows.length === 0}
                localeText={PlGridLocale}
            />
        </DataGridContainer>
    )
}

export default InventoryTable;