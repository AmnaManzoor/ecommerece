import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Badge,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './NavBar.css';

const NavBar: React.FC = () => {
  return (
    <AppBar position="sticky" className="navbar-appbar">
      <Toolbar className="navbar-toolbar">
        <Typography
          variant="h5"
          component="div"
          sx={{ flexGrow: 0, fontWeight: 700, cursor: 'pointer' }}
          className="navbar-logo"
        >
          ecommerce
        </Typography>
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Button color="inherit" href="/" className="navbar-link">
            Home
          </Button>
          <Button color="inherit" href="/products" className="navbar-link">
            Products
          </Button>
          <Button color="inherit" href="/about" className="navbar-link">
            About
          </Button>
          <Button color="inherit" href="/contact" className="navbar-link">
            Contact
          </Button>
        </Box>
        <IconButton color="inherit" className="cart-button">
          <Badge badgeContent={0} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
