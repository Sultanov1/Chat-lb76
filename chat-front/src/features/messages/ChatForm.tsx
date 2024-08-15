import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

const ChatForm = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Form submitted');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2, mx: 'auto' }}>
      <Typography variant="h6" component="div" sx={{ mb: 2 }}>
        Send a Message
      </Typography>
      <TextField
        fullWidth
        label="Author"
        variant="outlined"
        margin="normal"
        required
      />
      <TextField
        fullWidth
        label="Message"
        variant="outlined"
        margin="normal"
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
