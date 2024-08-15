import {createSlice} from '@reduxjs/toolkit';
import {Chat} from '../../types.ts';
import {createMessage, fetchMessage} from './chatThunk.ts';

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
    builder
      .addCase(fetchMessage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchMessage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.chats = action.payload;
      })
      .addCase(fetchMessage.rejected, (state) => {
        state.error = true;
      });
  },
  selectors: {
    selectMessages: (state) => state.chats,
  }
});

export const chatReducer = chatSlice.reducer;

export const {
  selectMessages
} = chatSlice.selectors;