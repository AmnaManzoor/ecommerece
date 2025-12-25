import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <Box component="footer" className="footer">
      <Container maxWidth="lg" className="footer-container">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" className="footer-title" gutterBottom>
              ecommerce
            </Typography>
            <Typography variant="body2" className="footer-description">
              Your premier destination for men's fashion. Quality clothing for the modern gentleman.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" className="footer-heading" gutterBottom>
              Quick Links
            </Typography>
            <Box component="ul" className="footer-links">
              <li><Link href="/" color="inherit" underline="hover">Home</Link></li>
              <li><Link href="/products" color="inherit" underline="hover">Products</Link></li>
              <li><Link href="/about" color="inherit" underline="hover">About Us</Link></li>
              <li><Link href="/contact" color="inherit" underline="hover">Contact</Link></li>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" className="footer-heading" gutterBottom>
              Customer Service
            </Typography>
            <Box component="ul" className="footer-links">
              <li><Link href="/shipping" color="inherit" underline="hover">Shipping Info</Link></li>
              <li><Link href="/returns" color="inherit" underline="hover">Returns</Link></li>
              <li><Link href="/faq" color="inherit" underline="hover">FAQ</Link></li>
              <li><Link href="/support" color="inherit" underline="hover">Support</Link></li>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" className="footer-heading" gutterBottom>
              Connect With Us
            </Typography>
            <Box className="footer-social">
              <IconButton
                color="inherit"
                aria-label="Facebook"
                className="social-link"
                size="small"
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                color="inherit"
                aria-label="Instagram"
                className="social-link"
                size="small"
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                color="inherit"
                aria-label="Twitter"
                className="social-link"
                size="small"
              >
                <TwitterIcon />
              </IconButton>
            </Box>
            <Typography variant="body2" className="footer-contact" sx={{ mt: 2 }}>
              Email: support@ecommerce.com<br />
              Phone: (555) 123-4567
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Divider sx={{ my: 2 }} />
      <Box className="footer-bottom">
        <Container maxWidth="lg">
          <Typography variant="body2" align="center">
            &copy; {new Date().getFullYear()} ecommerce. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
