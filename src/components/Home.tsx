import React from 'react';
import {
  Box,
  Container,
  Typography,
} from '@mui/material';
import ProductCard from './ProductCard';
import { products } from '../data/products';
import './Home.css';

const Home: React.FC = () => {
  return (
    <Box className="home">
      <Box className="home-header">
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" className="home-title" gutterBottom>
            Men's Fashion Store
          </Typography>
          <Typography variant="h6" component="p" className="home-subtitle">
            Discover premium quality clothing for the modern gentleman
          </Typography>
        </Container>
      </Box>
      <Container maxWidth="lg" className="products-container">
        <Typography 
          variant="h4" 
          component="h2" 
          className="products-title"
          gutterBottom
          sx={{ mb: 4, textAlign: 'center', fontWeight: 600, color: '#2c3e50' }}
        >
          Our Products
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
              lg: 'repeat(4, 1fr)',
            },
            gap: 4,
            width: '100%',
          }}
        >
          {products.map((product) => (
            <Box key={product.id}>
              <ProductCard product={product} />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
