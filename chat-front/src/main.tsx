import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import theme from './theme.ts';
import {CssBaseline, ThemeProvider} from '@mui/material';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './app/store.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <App/>
      </ThemeProvider>
    </BrowserRouter>
    </Provider>
  </StrictMode>,
);
