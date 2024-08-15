import axiosApi from '../../axiosApi.ts';
import {Chat, MessageMutation} from '../../types.ts';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const createMessage = createAsyncThunk<void, MessageMutation>('messages/createMessage', async (chatData) => {
  const {data: messages} = await axiosApi.post('/messages', chatData);
  return messages;
});

export const fetchMessage = createAsyncThunk<Chat[]>('messages/fetch', async () => {
  const {data: messages} = await axiosApi.get<Chat[]>('/messages');
  return messages;
})

