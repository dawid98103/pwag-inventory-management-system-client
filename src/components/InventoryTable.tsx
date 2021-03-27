import { DataGrid, ValueGetterParams, GridColDef, GridCellParams, GridColParams, GridCellValue } from '@material-ui/data-grid';
import { useState } from 'react';
import PlGridLocale from '../locale/DataGridLocale';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import InfoIcon from '@material-ui/icons/Info';
import styled from 'styled-components';
import DeletePositionModal from '../components/modals/DeletePositionModal';
import EditPositionModal from '../components/modals/EditPositionModal';
import InfoPositionModal from '../components/modals/InfoPositionModal';

const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin:auto;
`
const DataGridContainer = styled.div`
    height: 500px;
    width: 100%;
`

type InventoryTableProps = {
    rows: any[],
}

const InventoryTable = ({ rows }: InventoryTableProps) => {
    const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
    const [openEditModal, setOpenEditModal] = useState<boolean>(false);
    const [openInfoModal, setOpenInfoModal] = useState<boolean>(false);
    const [selectedItem, setSelectedItem] = useState<number>(0);

    function handleOpenDeletePositionModal(selectedItemId: GridCellValue) {
        let selectedValue: number = Number.parseInt(selectedItemId?.toString() || '0');
        setSelectedItem(selectedValue);
        setOpenDeleteModal(true);
    }

    function handleOpenEditPositionModal(selectedItemId: GridCellValue) {
        let selectedValue: number = Number.parseInt(selectedItemId?.toString() || '0');
        setSelectedItem(selectedValue);
        setOpenEditModal(true);
    }

    function handleInfoPositionModal(selectedItemId: GridCellValue) {
        let selectedValue: number = Number.parseInt(selectedItemId?.toString() || '0');
        setSelectedItem(selectedValue);
        setOpenInfoModal(true);
    }

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', flex: 1, align: 'center', headerAlign: 'center', renderHeader: (params: GridColParams) => { return <b>ID</b> } },
        { field: 'name', headerName: 'Nazwa', flex: 1, align: 'center', headerAlign: 'center', renderHeader: (params: GridColParams) => { return <b>Nazwa</b> } },
        { field: 'director', headerName: 'Model', flex: 1, align: 'center', headerAlign: 'center', renderHeader: (params: GridColParams) => { return <b>Reżyser</b> } },
        { field: 'price', headerName: 'Cena', type: 'number', flex: 1, align: 'center', headerAlign: 'center', renderHeader: (params: GridColParams) => { return <b>Cena</b> } },
        { field: 'quantity', headerName: 'Sztuk', type: 'number', flex: 1, align: 'center', headerAlign: 'center', renderHeader: (params: GridColParams) => { return <b>Sztuk</b> } },
        {
            field: 'summary', headerName: 'Razem', type: 'number', flex: 1, align: 'center', headerAlign: 'center', renderHeader: (params: GridColParams) => { return <b>Razem</b> }, valueGetter: (params: ValueGetterParams) =>
                `${params.getValue('quantity') || ''}`,
        },
        { field: 'state', headerName: 'Stan', type: 'string', flex: 1, align: 'center', headerAlign: 'center', renderHeader: (params: GridColParams) => { return <b>Stan</b> } },
        { field: 'info', headerName: 'Informacje', type: 'string', flex: 1, align: 'center', headerAlign: 'center', renderHeader: (params: GridColParams) => { return <b>Informacje</b> } },
        { field: 'genre', headerName: 'Gatunek', type: 'string', flex: 1, align: 'center', headerAlign: 'center', renderHeader: (params: GridColParams) => { return <b>Gatunek</b> } },
        {
            field: '', headerName: 'Operacje', sortable: false, disableClickEventBubbling: true, flex: 1, align: 'center', headerAlign: 'center', renderHeader: (params: GridColParams) => { return <b>Operacje</b> }, renderCell: (params: GridCellParams) => {
                return (
                    <ButtonsContainer>
                        <IconButton color="primary" aria-label="edit icon" onClick={() => handleInfoPositionModal(params.getValue('id'))}><InfoIcon /></IconButton>
                        <IconButton color="primary" aria-label="edit icon" onClick={() => handleOpenEditPositionModal(params.getValue('id'))}><EditIcon /></IconButton>
                        <IconButton color="secondary" aria-label="edit icon" onClick={() => handleOpenDeletePositionModal(params.getValue('id'))}><DeleteIcon /></IconButton>
                    </ButtonsContainer>
                )
            }
        }
    ];

    return (
        <DataGridContainer>
            <DeletePositionModal
                open={openDeleteModal}
                selectedItemId={selectedItem}
                closeModal={() => setOpenDeleteModal(false)}
            />
            <EditPositionModal
                open={openEditModal}
                selectedItemId={selectedItem}
                closeModal={() => setOpenEditModal(false)}
            />
            <InfoPositionModal
                open={openInfoModal}
                selectedItemId={selectedItem}
                closeModal={() => setOpenInfoModal(false)}
            />
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={10}
                localeText={PlGridLocale}
            />
        </DataGridContainer>
    )
}

export default InventoryTable;