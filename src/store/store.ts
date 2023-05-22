import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from './rootReducer';

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NEXT_PUBLIC_APP_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
