import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from '@mui/material';
import { Product } from '../types/Product';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card className="product-card" elevation={3}>
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
        <Typography
          variant="body2"
          color="text.secondary"
          className="product-description"
        >
          {product.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
