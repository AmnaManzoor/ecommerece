import { type MouseEvent, type SyntheticEvent } from 'react';
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
import { PRIMARY_COLOR, PRIMARY_HOVER } from '../constants/theme';
import './ProductCard.css';

const buttonSx = {
  backgroundColor: PRIMARY_COLOR,
  '&:hover': { backgroundColor: PRIMARY_HOVER },
};

const handleImageError = (e: SyntheticEvent<HTMLImageElement>) => {
  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/300x400?text=Product+Image';
};

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  const handleAddToCart = (e: MouseEvent) => {
    e.stopPropagation();
    // Get first available color and size
    const firstColor = product.colors?.[0];
    const firstSize = firstColor?.variants?.[0]?.size;
    if (firstColor && firstSize) {
      addToCart({
        productId: product.id,
        name: product.name,
        price: product.price,
        image: firstColor.images[0] || product.image,
        color: firstColor.name,
        size: firstSize,
      });
    } else {
      // Fallback for products without variants
      addToCart({
        productId: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        color: 'Default',
        size: 'One Size',
      });
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
        onError={handleImageError}
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
          sx={buttonSx}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
