import {configureStore} from '@reduxjs/toolkit';
import {chatReducer} from '../features/messages/chatSlice.ts';

export const store = configureStore({
  reducer: {
    'chat': chatReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;