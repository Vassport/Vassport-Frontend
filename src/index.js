import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import dotenv from 'dotenv';

import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';

// import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './common/store';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
