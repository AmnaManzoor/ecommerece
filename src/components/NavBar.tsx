import { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Badge,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useCart } from '../context/CartContext';
import './NavBar.css';

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { getCartItemCount } = useCart();
  const cartItemCount = getCartItemCount();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = () => {
    if (mobileOpen) {
      setMobileOpen(false);
    }
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Products' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActiveLink = (path: string) => {
    return location.pathname === path;
  };

  const drawer = (
    <Box onClick={handleNavClick} sx={{ textAlign: 'center', minHeight: '100vh', pt: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 2, mb: 2 }}>
        <Typography variant="h6" component={Link} to="/" sx={{ fontWeight: 700, textDecoration: 'none', color: '#667eea' }}>
          ecommerce 2026
        </Typography>
        <IconButton onClick={handleDrawerToggle} sx={{ color: '#667eea' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <List sx={{ pt: 2 }}>
        {navLinks.map((link) => (
          <ListItem key={link.path} disablePadding>
            <ListItemButton
              component={Link}
              to={link.path}
              selected={isActiveLink(link.path)}
              sx={{
                '&.Mui-selected': {
                  backgroundColor: 'rgba(102, 126, 234, 0.1)',
                  borderLeft: '4px solid #667eea',
                  color: '#667eea',
                  fontWeight: 600,
                },
                '&:hover': {
                  backgroundColor: 'rgba(102, 126, 234, 0.05)',
                },
              }}
            >
              <ListItemText primary={link.label} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding sx={{ mt: 2 }}>
          <ListItemButton onClick={() => navigate('/cart')} sx={{ color: '#667eea' }}>
            <Badge badgeContent={cartItemCount} color="secondary" sx={{ mr: 1 }}>
              <ShoppingCartIcon />
            </Badge>
            <ListItemText primary={`Cart (${cartItemCount})`} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar position="sticky" className="navbar-appbar" elevation={0}>
      <Toolbar className="navbar-toolbar">
        {/* Logo */}
        <Typography
          variant="h5"
          component={Link}
          to="/"
          sx={{
            flexGrow: 0,
            fontWeight: 800,
            cursor: 'pointer',
            textDecoration: 'none',
            color: 'inherit',
            letterSpacing: '-0.5px',
          }}
          className="navbar-logo"
        >
          ecommerce 2026
        </Typography>

        {/* Desktop Navigation */}
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'center',
            gap: 1,
            alignItems: 'center',
          }}
        >
          {navLinks.map((link) => (
            <Button
              key={link.path}
              component={Link}
              to={link.path}
              className={`navbar-link ${isActiveLink(link.path) ? 'active' : ''}`}
              color="inherit"
              sx={{
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  transform: isActiveLink(link.path) ? 'translateX(-50%) scaleX(1)' : 'translateX(-50%) scaleX(0)',
                  width: '60%',
                  height: '2px',
                  backgroundColor: 'white',
                  transition: 'transform 0.3s ease',
                },
                '&:hover::after': {
                  transform: 'translateX(-50%) scaleX(1)',
                },
                fontWeight: isActiveLink(link.path) ? 700 : 500,
              }}
            >
              {link.label}
            </Button>
          ))}
        </Box>

        {/* Right Side Actions */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {/* Cart Icon */}
          <IconButton
            color="inherit"
            className="cart-button"
            onClick={() => navigate('/cart')}
            aria-label={`Shopping cart with ${cartItemCount} items`}
            sx={{
              position: 'relative',
              '&::after': cartItemCount > 0 ? {
                content: '""',
                position: 'absolute',
                top: 0,
                right: 0,
                width: '8px',
                height: '8px',
                backgroundColor: '#ff6b6b',
                borderRadius: '50%',
                animation: 'pulse 2s infinite',
              } : {},
            }}
          >
            <Badge badgeContent={cartItemCount} color="secondary" max={99}>
              <ShoppingCartIcon />
            </Badge>
          </IconButton>

          {/* Mobile Menu Button */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' } }}
            className="menu-button"
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 280,
          },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default NavBar;
