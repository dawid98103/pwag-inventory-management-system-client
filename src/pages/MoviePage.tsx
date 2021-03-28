import { useState, useEffect } from 'react';
import InventoryTable from '../components/InventoryTable';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import AddPositionModal from '../components/modals/AddPositionModal';
import { IMovieResponseDto, UserRoles } from '../api/dto';
import InventoryAPI from '../api/api';
import { useStateContext } from '../contexts/state';

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

const MoviePage = (): JSX.Element => {
    const [openAddModal, setOpenAddModal] = useState<boolean>(false);
    const [refreshData, setRefreshData] = useState<boolean>(false);
    const [movies, setMovies] = useState<IMovieResponseDto[]>([]);
    const { state, dispatch } = useStateContext();

    useEffect(() => {
        InventoryAPI.get<IMovieResponseDto[]>("/movies")
            .then(response => {
                setMovies(response.data)
            })
            .catch(error => {
                alert(error.message)
            })
    }, [refreshData])



    function handleAddPositionModal() {
        setOpenAddModal(true);
    }

    return (
        <>
            <AddPositionModal open={openAddModal} closeModal={() => setOpenAddModal(false)} refreshData={() => setRefreshData(!refreshData)} />
            <InventoryPageActionBar>
                {state.currentUser?.userRole === UserRoles.ADMIN &&
                    <Button variant="contained" color="primary" onClick={() => handleAddPositionModal()}>
                        + Dodaj pozycję
                    </Button>
                }
            </InventoryPageActionBar>
            <InventoryTableContainer>
                <InventoryTable rows={movies} refreshData={() => setRefreshData(!refreshData)} />
            </InventoryTableContainer>
        </>
    )
}

export default MoviePage;