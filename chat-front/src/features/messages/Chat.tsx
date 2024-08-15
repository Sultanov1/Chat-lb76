import {Box, Button, List, ListItem, ListItemText} from '@mui/material';

const Chat = () => {
  return (
    <Box sx={{ mt: 2, mx: 'auto' }}>
      <List>
        <ListItem  sx={{ border: '1px solid #ccc' }}>
          <ListItemText>Card</ListItemText>
          <Button variant="outlined" color="secondary">
            Delete
          </Button>
        </ListItem>
      </List>
    </Box>
  );
};

export default Chat;