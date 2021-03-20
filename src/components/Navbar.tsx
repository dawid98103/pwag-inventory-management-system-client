import { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
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

const Navbar = () => {
    const { state, dispatch } = useStateContext();
    const [openMenu, setOpenMenu] = useState<boolean>(false);

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
                    <div>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                            onClick={() => setOpenMenu(true)}
                        >
                            <AccountCircle />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
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
                            onClose={() => setOpenMenu(false)}
                        >
                            <MenuItem onClick={() => setOpenMenu(false)}>Profil</MenuItem>
                            <MenuItem onClick={() => setOpenMenu(false)}>Konto</MenuItem>
                            <MenuItem onClick={() => setOpenMenu(false)}>Wyloguj</MenuItem>
                        </Menu>
                    </div>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;