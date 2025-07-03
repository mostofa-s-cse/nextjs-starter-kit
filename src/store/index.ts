import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import dataTableReducer from './slices/dataTableSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    dataTable: dataTableReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
