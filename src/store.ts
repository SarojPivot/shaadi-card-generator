import { configureStore } from '@reduxjs/toolkit';
import shaadiReducer from './slices/shaadiSlice'

export const store = configureStore({
  reducer: {
    shaadi: shaadiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;