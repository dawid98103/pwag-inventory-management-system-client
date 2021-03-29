import React from 'react';
import LoginPage from '../pages/LoginPage';
import ContentPage from '../pages/ContentPage';
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
        fontFamily: 'Arial',
        fontSize: 14
    },
}, plPL);

const App = () => {
    return (
        <React.Fragment>
            <StateProvider>
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                        <Route path="/" exact component={LoginPage} />
                        <Route path="/home" exact component={ContentPage} />
                    </BrowserRouter>
                </ThemeProvider>
            </StateProvider>
        </React.Fragment>
    )
}

export default App;