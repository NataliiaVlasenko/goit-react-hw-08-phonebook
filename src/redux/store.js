// import { configureStore } from '@reduxjs/toolkit';
// //import contactReducer from './contacts/contactsReducer';

// import { contactsSlice } from './contacts/contacts-slice';
// import { filterSlice } from './filter/filter-slice';

// export const store = configureStore({
//   reducer: {
//     contacts: contactsSlice.reducer,
//     filter: filterSlice.reducer,
//   },
// });


import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
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
import { contactsApi } from 'services/api';
import { authReducer } from './auth';
import contactsReducer from './contacts/contacts-reducer';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contactsReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(contactsApi.middleware);
  },
  logger,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);
export { store, persistor };