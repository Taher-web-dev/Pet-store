import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import PetReducers from './Pets/reducer';
import statusReducers from './Status/statusReducers';
import currentListReducer from './CurrentListPet/currentListReducers';
import searchReducer from './SearchStatus/searchReducer';
import messageReducer from './Message/message';

const reducers = combineReducers(
  {
    pets: PetReducers,
    petStatus: statusReducers,
    currentList: currentListReducer,
    search: searchReducer,
    message: messageReducer,
  },
);
const store = createStore(reducers, applyMiddleware(thunk, logger));
export default store;
