import { combineReducers } from 'redux';
import user from './user_reducer';
import { persistReducer } from 'redux-persist';	// 추가
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
  }	

const rootReducer = combineReducers({
    user  ,
    //auth: authReducers,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;