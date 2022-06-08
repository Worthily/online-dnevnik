import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { reducer } from './reducer';

export const store = configureStore({
  reducer: reducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
