import { configureStore } from '@reduxjs/toolkit';

import { PUBLIC_APP_ENV } from '@/shared/constants/env';

import { rootReducer } from './rootReducer';

export const store = configureStore({
  reducer: rootReducer,
  devTools: PUBLIC_APP_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
