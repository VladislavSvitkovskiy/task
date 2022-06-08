import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { combineReducers, Reducer } from 'redux';

import reducers from './slices/index';

export default (history: History): Reducer =>
  combineReducers({
    router: connectRouter(history),
    ...reducers
  });
