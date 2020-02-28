import React, { Fragment } from 'react';
import './App.css';
import Header from './components/layouts/Header';
import Dashboard from './components/leads/Dashboard';

function App() {
  return (
    <Fragment>
      <Header />
      <div className="container">
        <Dashboard />
      </div>
    </Fragment>
  );
}

export default App;
