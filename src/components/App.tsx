import LoginPage from '../pages/LoginPage';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';

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
        <ThemeProvider theme={theme}>
            <LoginPage />
        </ThemeProvider>
    )
}

export default App;