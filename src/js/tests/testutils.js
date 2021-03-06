import { createStore, applyMiddleware } from 'redux';
import reducers from './../reducers/';
import thunk from 'redux-thunk';

export const storeFactory = (initialState) => {
  return createStore(reducers, initialState, applyMiddleware(thunk));
};


