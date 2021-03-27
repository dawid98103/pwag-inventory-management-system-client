import { useState } from 'react';
import InventoryTable from '../components/InventoryTable';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import AddPositionModal from '../components/modals/AddPositionModal';

const InventoryTableContainer = styled.div`
    margin-top: 1.5vw;
`

const InventoryPageActionBar = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 10px 20px 10px;
    margin-top: 30px;
    border: 1px solid rgba(224, 224, 224, 1);
    border-radius: 4px;
`

const apiData = [
    { id: 1, name: 'Zielona mila', director: 'Frank Darabont', price: 20, quantity: 2, state: 'OK', info: 'Ogrórki zielone młode', genre: 'Dramat' },
    { id: 2, name: 'Skazani na Shawshank', director: 'Frank Darabont', price: 10, quantity: 2, state: 'OK', info: 'Pomidor czerwony fajny', genre: 'Dramat' },
    { id: 3, name: 'Matrix', director: 'Lilly Wachowski', price: 20, quantity: 2, state: 'Wypożyczony', info: 'Ogrórki zielone młode', genre: 'Akcja' }
];

const InventoryPage = (): JSX.Element => {
    const [openAddModal, setOpenAddModal] = useState<boolean>(false);

    function handleAddPositionModal() {
        setOpenAddModal(true);
    }

    return (
        <>
            <AddPositionModal open={openAddModal} closeModal={() => setOpenAddModal(false)} />
            <InventoryPageActionBar>
                <Button variant="contained" color="primary" onClick={() => handleAddPositionModal()}>
                    + Dodaj pozycję
            </Button>
            </InventoryPageActionBar>
            <InventoryTableContainer>
                <InventoryTable rows={apiData} />
            </InventoryTableContainer>
        </>
    )
}

export default InventoryPage;