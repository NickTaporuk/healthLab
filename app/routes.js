/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import Persons from './components/Persons';
import Dashboard from './containers/Dasboard';

export default () => (
  <App>
    <Switch>

      <Route path="/counter" component={Dashboard(CounterPage)} />
      <Route path="/persons" component={Dashboard(Persons)} />
      <Route path="/" component={Dashboard(HomePage)} />

    </Switch>
  </App>
);
