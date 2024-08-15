import { AppBar, styled, Toolbar, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)({
  color: 'inherit',
  textDecoration: 'none',
  marginLeft: '20px',
  '&:hover': {
    color: 'inherit',
  },
});

const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{ mb: 2 }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <StyledLink to="/">Chat</StyledLink>
        </Typography>
        <Box sx={{ display: 'flex' }}>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/messages-form">Messages Form</StyledLink>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
