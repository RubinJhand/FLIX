import { StrictMode } from 'react';
import { render } from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyles } from './GlobalStyles';
import { StylesProvider } from '@material-ui/core/styles';

import App from './App';

render(
  <StrictMode>
    <GlobalStyles />
    <StylesProvider injectFirst>
      <Router>
        <App />
      </Router>
    </StylesProvider>
  </StrictMode>,
  document.getElementById('root')
);
