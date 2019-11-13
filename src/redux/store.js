import { createStore,applyMiddleware } from 'redux';
import logger from 'redux-logger';
import routeReducer from './route-reducer';

// adding middleware i.e middlewares

const middlewares = [logger];
const store = createStore( routeReducer , applyMiddleware(...middlewares));

export default store;