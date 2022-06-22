import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import avPetReducers from './AvailablePet/reducer';

const reducers = combineReducers({ availables: avPetReducers });
const store = createStore(reducers, applyMiddleware(thunk, logger));
export default store;

