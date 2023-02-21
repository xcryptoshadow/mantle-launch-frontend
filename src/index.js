import React from 'react';
import { InitSwAuth } from '@skill-wallet/auth';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { ethers } from 'ethers';
import { Web3ReactProvider } from '@web3-react/core';
import * as serviceWorker from './registerServiceWorker';

// core components
import Admin from './layouts/Admin.js';
import Manage from './layouts/Manage.js';
// import RTL from "layouts/RTL.js";

import './assets/css/material-dashboard-react.css?v=1.10.0';

import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// Create a new theme object with the desired primary color
const theme = createTheme({
  palette: {
    primary: {
      main: '#4caf50',
    },
  },
});

const getLibrary = (provider) => {
  const library = new ethers.providers.Web3Provider(provider);
  return library;
};

ReactDOM.render(
  <Web3ReactProvider getLibrary={getLibrary}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route path="/client" component={Admin} />
          <Route path="/manage" component={Manage} />

          {/* <Route path="/rtl" component={RTL} /> */}
          <Redirect from="/" to="/client/TokenLock" />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  </Web3ReactProvider>,
  document.getElementById('root')
);
InitSwAuth();
serviceWorker.unregister();
