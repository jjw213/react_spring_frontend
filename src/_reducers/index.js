import { combineReducers } from 'redux';
import user from './user_reducer';
import board from './board_reducer';
import { persistReducer } from 'redux-persist';	// 추가
import storage from 'redux-persist/lib/storage/session';

const persistConfig = {
    key: 'root',
    storage,
  }	

const rootReducer = combineReducers({
    user  ,
    board,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;