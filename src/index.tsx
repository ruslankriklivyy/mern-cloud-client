import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './reducers';

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          WebkitFontSmoothing: 'auto',
        },
        body: {
          backgroundColor: '#E5E1E3',
        },
      },
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
