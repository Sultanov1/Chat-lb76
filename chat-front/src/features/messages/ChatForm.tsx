import React, {useState} from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import {useAppDispatch} from '../../app/hooks.ts';
import {createMessage} from './chatThunk.ts';
import dayjs from 'dayjs';

const ChatForm = () => {
  const [message, setMessage] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const dispatch = useAppDispatch();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const newChat = {
      author,
      message,
      createdAt: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    }

    dispatch(createMessage(newChat))
    setAuthor('');
    setMessage('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2, mx: 'auto' }}>
      <Typography variant="h6" component="div" sx={{ mb: 2 }}>
        Messages Form
      </Typography>
      <TextField
        fullWidth
        label="Author"
        variant="outlined"
        margin="normal"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <TextField
        fullWidth
        label="Message"
        variant="outlined"
        margin="normal"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        multiline
        rows={4}
      />
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Send
      </Button>
    </Box>
  );
};

export default ChatForm;
