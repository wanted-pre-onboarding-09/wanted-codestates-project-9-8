import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import listSlice from './reducers/listSlice';
import filterSlice from './reducers/filterSlice';
import modalSlice from './reducers/modalSlice';
import toastSlice from './reducers/toastSlice';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['filterSlice', 'modalSlice', 'toastSlice'],
};

const rootReducer = combineReducers({
  listSlice,
  filterSlice,
  modalSlice,
  toastSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;
