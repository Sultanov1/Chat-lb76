import { Box, Button, List, ListItem, ListItemText, Typography } from '@mui/material';
import { useAppDispatch } from '../../app/hooks.ts';
import { useEffect } from 'react';
import { fetchMessage} from './chatThunk.ts';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store.ts';
import dayjs from 'dayjs';

const Chat = () => {
  const dispatch = useAppDispatch();
  const chats = useSelector((state: RootState) => state.chat.chats);

  useEffect(() => {
    dispatch(fetchMessage());
  }, [dispatch]);

  return (
    <Box sx={{ mt: 2, mx: 'auto' }}>
      <Typography variant="h6" component="div" sx={{ mb: 2 }}>
        Messages List
      </Typography>
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
