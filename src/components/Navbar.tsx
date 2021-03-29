import { useState } from 'react';
import { Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { PageType, useStateContext } from '../contexts/state';
import { UserRoles } from '../api/dto';
import { useHistory } from 'react-router-dom';
import { ActionType } from '../contexts/reducer';
import Divider from '@material-ui/core/Divider';

const CustomTypohraphy = styled(Typography)`
    flex-grow: 1;
    color: white;
`

const UserIconSection = styled.div`
    display: flex;
    align-items: center
`

const MarginDivider = styled(Divider)`
    margin: 0px 10px 0px 10px;
`

const Navbar = () => {
    const { state, dispatch } = useStateContext();
    const history = useHistory();
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
        setOpenMenu(true);
    };

    const handleLogout = (event: React.MouseEvent<HTMLElement>) => {
        if (dispatch) {
            dispatch({ type: ActionType.SIGN_OUT })
            history.push("/");
        }
        setOpenMenu(false);
    };

    const switchToUserTable = () => {
        if (dispatch) {
            dispatch({ type: ActionType.CHANGE_PAGE, payload: PageType.USERS })
        }
    }

    const switchToMovieTable = () => {
        if (dispatch) {
            dispatch({ type: ActionType.CHANGE_PAGE, payload: PageType.MOVIES })
        }
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <Button onClick={state.currentPage === PageType.MOVIES ? switchToUserTable : switchToMovieTable}>
                    <CustomTypohraphy>
                        {state.currentPage === PageType.MOVIES ? "Użytkownicy" : "Filmy"}
                    </CustomTypohraphy>
                </Button>
                <MarginDivider orientation="vertical" flexItem />
                <CustomTypohraphy variant="h6">
                    {state.currentPage === PageType.MOVIES ? "Inwentarz filmów" : "Wykaz użytkowników"}
                </CustomTypohraphy>
                {state.isAuthenticated && (
                    <UserIconSection>
                        <CustomTypohraphy variant="h6">
                            {state.currentUser?.username}
                        </CustomTypohraphy>
                        <IconButton
                            color="inherit"
                            onClick={handleOpenUserMenu}
                        >
                            <AccountCircle />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={openMenu}
                            onClose={setOpenMenu}
                        >
                            <MenuItem onClick={handleLogout}>Wyloguj</MenuItem>
                        </Menu>
                    </UserIconSection>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;