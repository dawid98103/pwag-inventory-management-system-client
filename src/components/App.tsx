import React from 'react';
import LoginPage from '../pages/LoginPage';
import Navbar from '../components/Navbar';
import InventoryPage from '../pages/InventoryPage';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import { StateProvider } from '../contexts/state';
import { BrowserRouter, Route } from 'react-router-dom';
import { plPL } from '@material-ui/core/locale';

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
}, plPL);

const App = () => {
    return (
        <React.Fragment>
            <StateProvider>
                <ThemeProvider theme={theme}>
                    <Navbar />
                    <BrowserRouter>
                        <Route path="/" exact component={LoginPage} />
                        <Route path="/inventory" exact component={InventoryPage} />
                    </BrowserRouter>
                </ThemeProvider>
            </StateProvider>
        </React.Fragment>
    )
}

export default App;