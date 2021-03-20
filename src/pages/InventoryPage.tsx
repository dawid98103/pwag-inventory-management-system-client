import InventoryTable from '../components/InventoryTable';
import styled from 'styled-components';

const TableGroupHeader = styled.div`
    display: flex;
    justify-content: center;
    align-item: center;
    padding: 36px 0px 36px 0px;
    margin: 16px 0px 16px 0px;
    background-color: #f5f5f5;
`;

const rows = [
    { id: 1, name: 'Ogórki', model: 'Zielone', price: 20, quantity: 2, source: 'Źródło', state: 'Ogórki', info: 'Ogrórki zielone młode' },
    { id: 2, name: 'Pomidor', model: 'Czerwony', price: 10, quantity: 2, source: 'Warzywniak', state: 'OK', info: 'Pomidor czerwony fajny' },
    { id: 3, name: 'Ogórki', model: 'Zielone', price: 20, quantity: 2, source: 'Źródło', state: 'Ogórki', info: 'Ogrórki zielone młode' },
    { id: 4, name: 'Ogórki', model: 'Zielone', price: 20, quantity: 2, source: 'Źródło', state: 'Ogórki', info: 'Ogrórki zielone młode' },
    { id: 5, name: 'Ogórki', model: 'Zielone', price: 20, quantity: 2, source: 'Źródło', state: 'Ogórki', info: 'Ogrórki zielone młode' }
];

const apiData = [
    {
        group: "Owoce",
        apiData: [
            { id: 1, name: 'Ogórki', model: 'Zielone', price: 20, quantity: 2, source: 'Źródło', state: 'Ogórki', info: 'Ogrórki zielone młode' },
            { id: 2, name: 'Pomidor', model: 'Czerwony', price: 10, quantity: 2, source: 'Warzywniak', state: 'OK', info: 'Pomidor czerwony fajny' },
            { id: 3, name: 'Ogórki', model: 'Zielone', price: 20, quantity: 2, source: 'Źródło', state: 'Ogórki', info: 'Ogrórki zielone młode' },
            { id: 4, name: 'Ogórki', model: 'Zielone', price: 20, quantity: 2, source: 'Źródło', state: 'Ogórki', info: 'Ogrórki zielone młode' },
            { id: 5, name: 'Ogórki', model: 'Zielone', price: 20, quantity: 2, source: 'Źródło', state: 'Ogórki', info: 'Ogrórki zielone młode' }
        ]
    },
    {
        group: "Warzywa",
        apiData: [
            { id: 1, name: 'Ogórki', model: 'Zielone', price: 20, quantity: 2, source: 'Źródło', state: 'Ogórki', info: 'Ogrórki zielone młode' },
            { id: 2, name: 'Pomidor', model: 'Czerwony', price: 10, quantity: 2, source: 'Warzywniak', state: 'OK', info: 'Pomidor czerwony fajny' },
            { id: 3, name: 'Ogórki', model: 'Zielone', price: 20, quantity: 2, source: 'Źródło', state: 'Ogórki', info: 'Ogrórki zielone młode' },
            { id: 4, name: 'Ogórki', model: 'Zielone', price: 20, quantity: 2, source: 'Źródło', state: 'Ogórki', info: 'Ogrórki zielone młode' },
            { id: 5, name: 'Ogórki', model: 'Zielone', price: 20, quantity: 2, source: 'Źródło', state: 'Ogórki', info: 'Ogrórki zielone młode' }
        ]
    },
    {
        group: "Inne",
        apiData: [
            { id: 1, name: 'Ogórki', model: 'Zielone', price: 20, quantity: 2, source: 'Źródło', state: 'Ogórki', info: 'Ogrórki zielone młode' },
            { id: 2, name: 'Pomidor', model: 'Czerwony', price: 10, quantity: 2, source: 'Warzywniak', state: 'OK', info: 'Pomidor czerwony fajny' },
            { id: 3, name: 'Ogórki', model: 'Zielone', price: 20, quantity: 2, source: 'Źródło', state: 'Ogórki', info: 'Ogrórki zielone młode' },
            { id: 4, name: 'Ogórki', model: 'Zielone', price: 20, quantity: 2, source: 'Źródło', state: 'Ogórki', info: 'Ogrórki zielone młode' },
            { id: 5, name: 'Ogórki', model: 'Zielone', price: 20, quantity: 2, source: 'Źródło', state: 'Ogórki', info: 'Ogrórki zielone młode' }
        ]
    }
];

const InventoryPage = (): JSX.Element => {
    return <>{
        apiData.map(data => <div><TableGroupHeader><h1>{data.group}</h1></TableGroupHeader><InventoryTable rows={data.apiData} /></div>)
    }</>
}

export default InventoryPage;