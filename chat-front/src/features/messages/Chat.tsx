import {Box, Button, List, ListItem, ListItemText, Typography} from '@mui/material';

const Chat = () => {
  return (
    <Box sx={{ mt: 2, mx: 'auto' }}>
      <Typography variant="h6" component="div" sx={{ mb: 2 }}>
        Messages List
      </Typography>
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