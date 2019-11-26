import { createStore,applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import routeReducer from './route-reducer';

// adding middleware i.e middlewares

const middlewares = [logger];
export const store = createStore( routeReducer , applyMiddleware(...middlewares));
export const persistor = persistStore(store);

export default {store, persistor};