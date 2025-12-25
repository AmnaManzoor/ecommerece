import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  Button,
  Rating,
  Box,
} from '@mui/material';
import { Product } from '../types/Product';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Get first available color and size
    const firstColor = product.colors?.[0];
    const firstSize = firstColor?.variants[0]?.size;
    if (firstColor && firstSize) {
      addToCart(product, firstColor.name, firstSize);
    } else {
      addToCart(product);
    }
  };

  return (
    <Card 
      className="product-card" 
      elevation={3}
      sx={{ cursor: 'pointer' }}
      onClick={handleCardClick}
    >
      <CardMedia
        component="img"
        height="300"
        image={product.image}
        alt={product.name}
        className="product-image"
        onError={(e) => {
          // Fallback image if the URL fails
          (e.target as HTMLImageElement).src = 'https://via.placeholder.com/300x400?text=Product+Image';
        }}
      />
      <CardContent className="product-info">
        <Typography
          variant="h6"
          component="h3"
          className="product-name"
          gutterBottom
        >
          {product.name}
        </Typography>
        <Typography
          variant="h5"
          component="p"
          className="product-price"
          gutterBottom
        >
          ${product.price.toFixed(2)}
        </Typography>
        <Box className="product-rating" sx={{ mb: 2 }}>
          <Rating
            value={product.rating}
            readOnly
            precision={0.5}
            size="medium"
            sx={{
              '& .MuiRating-iconFilled': {
                color: '#ffc107',
              },
              '& .MuiRating-iconEmpty': {
                color: '#e0e0e0',
              },
            }}
          />
          <Typography
            variant="body2"
            color="text.secondary"
            component="span"
            sx={{ ml: 1, color: '#666' }}
          >
            ({product.rating.toFixed(1)})
          </Typography>
        </Box>
        <Typography
          variant="body2"
          color="text.secondary"
          className="product-description"
        >
          {product.description}
        </Typography>
      </CardContent>
      <CardActions className="product-actions" onClick={(e) => e.stopPropagation()}>
        <Button 
          variant="contained" 
          fullWidth 
          className="product-button"
          onClick={handleAddToCart}
          sx={{
            backgroundColor: '#667eea',
            '&:hover': {
              backgroundColor: '#5568d3',
            },
          }}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
