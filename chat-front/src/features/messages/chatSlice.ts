import {createSlice} from '@reduxjs/toolkit';
import {Chat} from '../../types.ts';
import {createMessage} from './chatThunk.ts';

export interface ChatSlice {
  chats: Chat[];
  isLoading: boolean;
  error: boolean;
}

export const initialState: ChatSlice = {
  chats: [],
  isLoading: false,
  error: false,
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(createMessage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createMessage.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(createMessage.rejected, (state) => {
        state.error = true;
      });
  }
});

export const chatReducer = chatSlice.reducer;