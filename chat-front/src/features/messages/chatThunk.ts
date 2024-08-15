import axiosApi from '../../axiosApi.ts';
import {MessageMutation} from '../../types.ts';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const createMessage = createAsyncThunk<void, MessageMutation>('messages/createMessage', async (chatData) => {
  const response = await axiosApi.post('/messages', chatData);
  return response.data;
});

