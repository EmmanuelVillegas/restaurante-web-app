import React from 'react';
import { render } from 'react-dom';

// React Router
import { BrowserRouter } from 'react-router-dom';

// Redux - Storage
import { Provider } from 'react-redux';
import store from './store';

// Material UI - theme
import { CircularProgress, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import theme from './config/MUITheme';

// App
import App from './App';

const APP_CONTAINER = document.getElementById('root');

render(
  <ThemeProvider theme={theme}>
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '90vh'
      }}>
      <CircularProgress color="primary" size={80} />
    </div>
  </ThemeProvider>,
  APP_CONTAINER
);

store.firebaseAuthIsReady.then(() => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>,
    APP_CONTAINER
  );
});
