import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global.style';
import router from './routes/router';
import theme from './styles/theme.style';

function App() {
    console.log(process.env.NODE_ENV);
    // development
    return (
        <ThemeProvider theme={theme}>
                {/* provider */}
                <GlobalStyles />
                <RouterProvider router={router} />
                {/* provider */}
        </ThemeProvider>
    );
}
export default App;
