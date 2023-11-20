import { configureStore } from '@reduxjs/toolkit';
import {
   persistStore,
   persistReducer,
   FLUSH,
   REHYDRATE,
   PAUSE,
   PERSIST,
   PURGE,
   REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/authSlice';
import { gameApi } from './game/gameApi';
import gameSlice from './game/gameSliceQuery';

import { setupListeners } from '@reduxjs/toolkit/query';

const authPersistConfig = {
   key: 'auth',
   storage,
   whitelist: ['token'],
};

export const store = configureStore({
   reducer: {
      auth: persistReducer(authPersistConfig, authReducer),
      gameSlice: gameSlice,
      [gameApi.reducerPath]: gameApi.reducer,
   },
   middleware: (getDefaultMiddleware) => [
      ...getDefaultMiddleware({
         serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
         },
      }),
      gameApi.middleware,
   ],
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
