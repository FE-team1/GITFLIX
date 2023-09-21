import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global.style';
import router from './routes/router';
import theme from './styles/theme.style';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  console.log(process.env.NODE_ENV) 
  // development
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          {/* provider */}
            <GlobalStyles/>
            <RouterProvider router={router} />
          {/* provider */}
        </ThemeProvider>
      </Provider>
    );
}
export default App;
