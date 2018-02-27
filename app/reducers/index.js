// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import persons from './persons';

const rootReducer = combineReducers({
  counter,
  persons,
  router,
});

export default rootReducer;
