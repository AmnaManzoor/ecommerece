import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
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
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
