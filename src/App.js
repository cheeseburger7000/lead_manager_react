import React, { Fragment } from 'react';
import './App.css';
import Header from './components/layouts/Header';
import Alerts from './components/layouts/Alerts';
import Dashboard from './components/leads/Dashboard';

import { Provider } from 'react-redux';
import store from './store'

import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

// Alert Options
const alertOptions = {
  timeout: 3000,
  position: 'top center'
};

function App() {
  return (
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} 
      {...alertOptions}>
        <Fragment>
          <Header />
          <Alerts />
          <div className="container">
            <Dashboard />
          </div>
        </Fragment>
      </AlertProvider>
    </Provider>
  );
}

export default App;
