import { Box, Container, Typography, Fade } from '@mui/material';
import ProductCard from './ProductCard';
import { products } from '../data/products';
import './Home.css';

const Home = () => {
  return (
    <Box className="home">
      {/* Hero Section */}
      <Box className="home-header">
        <Container maxWidth="lg">
          <Fade in timeout={800}>
            <Box>
              <Typography variant="h1" component="h1" className="home-title" gutterBottom>
                Men's Fashion Store
              </Typography>
              <Typography variant="h5" component="p" className="home-subtitle">
                Discover premium quality clothing for the modern gentleman
              </Typography>
              <Box className="home-features">
                <Box className="feature-item">
                  <Typography variant="body1" className="feature-text">Free Shipping</Typography>
                </Box>
                <Box className="feature-item">
                  <Typography variant="body1" className="feature-text">Premium Quality</Typography>
                </Box>
                <Box className="feature-item">
                  <Typography variant="body1" className="feature-text">Easy Returns</Typography>
                </Box>
              </Box>
            </Box>
          </Fade>
        </Container>
      </Box>

      {/* Products Section */}
      <Container maxWidth="xl" className="products-container">
        <Fade in timeout={1000}>
          <Box>
            <Box className="section-header">
              <Typography variant="h3" component="h2" className="products-title">
                Our Products
              </Typography>
              <Typography variant="body1" className="products-subtitle">
                Explore our curated collection of premium men's fashion
              </Typography>
            </Box>
            <Box
              className="products-grid"
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr',
                  sm: 'repeat(2, 1fr)',
                  md: 'repeat(3, 1fr)',
                  lg: 'repeat(4, 1fr)',
                },
                gap: { xs: 3, sm: 3, md: 4, lg: 4 },
                width: '100%',
              }}
            >
              {products.map((product, index) => (
                <Fade in timeout={1200 + index * 100} key={product.id}>
                  <Box>
                    <ProductCard product={product} />
                  </Box>
                </Fade>
              ))}
            </Box>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
};

export default Home;
