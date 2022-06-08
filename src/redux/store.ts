import { routerMiddleware } from 'connected-react-router';
import thunkMiddleware from 'redux-thunk';
import history from 'services/history';

import rootReducer from './root-reducer';
import { configureStore, MiddlewareArray } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: rootReducer(history),
  middleware: new MiddlewareArray().concat(thunkMiddleware, routerMiddleware(history)),
  devTools: process.env.NODE_ENV !== 'production'
});

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export default store;
