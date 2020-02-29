import React, { Component, Fragment } from 'react';
import './App.css';
import Header from './components/layouts/Header';
import Alerts from './components/layouts/Alerts';
import Dashboard from './components/leads/Dashboard';

import { Provider } from 'react-redux';
import store from './store'

import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Register from './components/account/Register';
import Login from './components/account/Login';

import PrivateRoute from './components/common/PrivateRoute';

import { loadUser } from './actions/auth';

// Alert Options
const alertOptions = {
  timeout: 3000,
  position: 'top center'
};

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate}
          {...alertOptions}>
          <Router>
            <Fragment>
              <Header />
              <Alerts />
              <div className="container">
                <Switch>
                  <PrivateRoute exact path="/" component={Dashboard} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

export default App;
