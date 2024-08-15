import {Box, Button, CircularProgress, List, ListItem, ListItemText, Typography} from '@mui/material';
import {useAppDispatch, useAppSelector} from '../../app/hooks.ts';
import { useEffect } from 'react';
import {deleteMessage, fetchMessage} from './chatThunk.ts';
import dayjs from 'dayjs';
import {selectedProductCreating, selectMessages} from './chatSlice.ts';

const Chat = () => {
  const dispatch = useAppDispatch();
  const chats = useAppSelector(selectMessages);
  const isLoading = useAppSelector(selectedProductCreating);

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(fetchMessage());
    }, 5000);

    return () => clearInterval(intervalId);
  }, [dispatch]);

  const handleDelete = (id: string) => {
    dispatch(deleteMessage(id)).then(() => {
      dispatch(fetchMessage());
    });
  }

  return (
    <Box sx={{ mt: 2, mx: 'auto' }}>
      <Typography variant="h6" component="div" sx={{ mb: 2 }}>
        Messages List
      </Typography>
      {isLoading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          <CircularProgress />
        </Box>
      )}
      <List>
        {chats.map((chat) => (
          <ListItem key={chat.id} sx={{ border: '1px solid #ccc', mb: 1, p: 1 }}>
            <ListItemText
              primary={`${chat.author} (${dayjs(chat.createdAt).format('DD.MM.YYYY HH:mm')})`}
              secondary={chat.message}
            />
            <Button
              variant="outlined"
              color="error"
              onClick={() => handleDelete(chat.id)}
            >
              Delete
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Chat;
