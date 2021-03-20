import React from 'react';
import LoginPage from '../pages/LoginPage';
import InventoryPage from '../pages/InventoryPage';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import { StateProvider } from '../contexts/state';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#558b2f',
        },
        secondary: {
            main: '#d84315',
        },
    },
    typography: {
        fontFamily: 'Raleway, Arial',
    },
});

const App = () => {
    return (
        <React.Fragment>
            <StateProvider>
                <ThemeProvider theme={theme}>
                    <LoginPage />
                </ThemeProvider>
            </StateProvider>
        </React.Fragment>
    )
}

export default App;