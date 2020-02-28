import React, { Fragment } from 'react';
import './App.css';
import Header from './components/layouts/Header';
import Dashboard from './components/leads/Dashboard';

import { Provider } from 'react-redux';
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <Header />
        <div className="container">
          <Dashboard />
        </div>
      </Fragment>
    </Provider>
  );
}

export default App;
