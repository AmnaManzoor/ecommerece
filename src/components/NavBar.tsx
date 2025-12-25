import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
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
import { useCart } from '../context/CartContext';
import './NavBar.css';

const NavBar: React.FC = () => {
  const navigate = useNavigate();
  const { getTotalItems } = useCart();
  const cartItemCount = getTotalItems();

  return (
    <AppBar position="sticky" className="navbar-appbar">
      <Toolbar className="navbar-toolbar">
        <Typography
          variant="h5"
          component={Link}
          to="/"
          sx={{ flexGrow: 0, fontWeight: 700, cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}
          className="navbar-logo"
        >
          ecommerce
        </Typography>
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Button color="inherit" component={Link} to="/" className="navbar-link">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/" className="navbar-link">
            Products
          </Button>
          <Button color="inherit" component={Link} to="/" className="navbar-link">
            About
          </Button>
          <Button color="inherit" component={Link} to="/" className="navbar-link">
            Contact
          </Button>
        </Box>
        <IconButton 
          color="inherit" 
          className="cart-button"
          onClick={() => navigate('/cart')}
        >
          <Badge badgeContent={cartItemCount} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
