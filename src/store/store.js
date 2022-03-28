import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reducers from '../_reducers';

export default createStore(reducers, applyMiddleware(logger));