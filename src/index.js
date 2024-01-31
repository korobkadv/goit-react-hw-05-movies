import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    white: '#FFFFFF',
    black: '#212121',
    grey: '#E7ECF2',
    textColor: '#4E5C6C',
    greyText: '#454545',
    acent: '#026cb3',
    acent2: '#0E9B71',
    acent3: '#F13906',
    error: '#E74C3C',
  },
  spacing: value => `${value * 4}px`,
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </HashRouter>
  </React.StrictMode>
);
