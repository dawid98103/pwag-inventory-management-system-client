import { useState, useEffect } from 'react';
import UsersTable from '../components/UsersTable';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import AddUserModal from '../components/modals/AddUserModal';
import { IUsersResponseDto, UserRoles } from '../api/dto';
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

const UsersPage = (): JSX.Element => {
    const [openAddModal, setOpenAddModal] = useState<boolean>(false);
    const [refreshData, setRefreshData] = useState<boolean>(false);
    const [users, setUsers] = useState<IUsersResponseDto[]>([]);
    const { state, dispatch } = useStateContext();

    useEffect(() => {
        InventoryAPI.get<IUsersResponseDto[]>("/users")
            .then(response => {
                setUsers(response.data)
            })
            .catch(error => {
                alert(error.message)
            })
    }, [refreshData])

    function handleAddUserModal() {
        setOpenAddModal(true);
    }

    return (
        <>
            <AddUserModal open={openAddModal} closeModal={() => setOpenAddModal(false)} refreshData={() => setRefreshData(!refreshData)} />
            <InventoryPageActionBar>
                {state.currentUser?.roleId === UserRoles.ADMIN &&
                    <Button variant="contained" color="primary" onClick={() => handleAddUserModal()}>
                        + Dodaj Użytkownika
                    </Button>
                }
            </InventoryPageActionBar>
            <InventoryTableContainer>
                <UsersTable rows={users} refreshData={() => setRefreshData(!refreshData)} />
            </InventoryTableContainer>
        </>
    )
}

export default UsersPage;