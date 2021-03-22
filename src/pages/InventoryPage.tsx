import InventoryTable from '../components/InventoryTable';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const InventoryTableContainer = styled.div`
    margin-top: 1.5vw;
`

const InventoryPageActionBar = styled.div`
    display: flex;
    padding: 20px 10px 20px 10px;
    margin-top: 30px;
    border: 1px solid rgba(224, 224, 224, 1);
    border-radius: 4px;
`

const apiData = [
    { id: 1, name: 'Ogórki', model: 'Zielone', price: 20, quantity: 2, source: 'Źródło', state: 'OK', info: 'Ogrórki zielone młode', group: 'Warzywa' },
    { id: 2, name: 'Pomidor', model: 'Czerwony', price: 10, quantity: 2, source: 'Warzywniak', state: 'OK', info: 'Pomidor czerwony fajny', group: 'Warzywa' },
    { id: 3, name: 'Ogórki', model: 'Zielone', price: 20, quantity: 2, source: 'Źródło', state: 'Wypożyczony', info: 'Ogrórki zielone młode', group: 'Warzywa' },
    { id: 4, name: 'Ogórki', model: 'Zielone', price: 20, quantity: 2, source: 'Źródło', state: 'Uszkodzony', info: 'Ogrórki zielone młode', group: 'Warzywa' },
    { id: 5, name: 'Ogórki', model: 'Zielone', price: 20, quantity: 2, source: 'Źródło', state: 'OK', info: 'Ogrórki zielone młode', group: 'Owoce' },
    { id: 6, name: 'Ogórki', model: 'Zielone', price: 20, quantity: 2, source: 'Źródło', state: 'OK', info: 'Ogrórki zielone młode', group: 'Owoce' },
    { id: 7, name: 'Ogórki', model: 'Zielone', price: 20, quantity: 2, source: 'Źródło', state: 'OK', info: 'Ogrórki zielone młode', group: 'Warzywa' }
];

const InventoryPage = (): JSX.Element => {
    return (
        <>
            <InventoryPageActionBar>
                <Button variant="contained" color="primary">
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