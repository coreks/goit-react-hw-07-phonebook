import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import contactsReducers from './contacts/contactsReducers';

const middleware = [...getDefaultMiddleware(), logger];

export const store = configureStore({
  reducer: { contacts: contactsReducers },
  middleware,
});
