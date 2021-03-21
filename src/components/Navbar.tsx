import { useState } from 'react';
import { Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import styled from 'styled-components';
import { useStateContext } from '../contexts/state';

const CustomIconButton = styled(IconButton)`
    margin-right: 16px;
`

const CustomTypohraphy = styled(Typography)`
    flex-grow: 1
`

const UserIconSection = styled.div`
    display: flex;
    align-items: center
`

const Navbar = () => {
    const { state, dispatch } = useStateContext();
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
        setOpenMenu(true);
    };

    const handleCloseMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(null);
        setOpenMenu(false);
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <CustomIconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </CustomIconButton>
                <CustomTypohraphy variant="h6">
                    Inwentarz
                </CustomTypohraphy>
                {state.isAuthenticated && (
                    <UserIconSection>
                        <CustomTypohraphy variant="h6">
                            {state.currentUser?.username}
                        </CustomTypohraphy>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                            onClick={handleOpenMenu}
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
                            <MenuItem onClick={handleCloseMenu}>Profil</MenuItem>
                            <MenuItem onClick={handleCloseMenu}>Konto</MenuItem>
                            <MenuItem onClick={handleCloseMenu}>Wyloguj</MenuItem>
                        </Menu>
                    </UserIconSection>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;