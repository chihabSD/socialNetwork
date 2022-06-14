import React from 'react';

import "./index.css";
import "./styles/icons/icons.css";

import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

  import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>

  <Router>
    <App />
  </Router>
  </Provider>
);


