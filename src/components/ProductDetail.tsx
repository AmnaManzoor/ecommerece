import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Rating,
  Chip,
  Alert,
  IconButton,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import './ProductDetail.css';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const productId = parseInt(id || '0', 10);
  const product = products.find((p) => p.id === productId);

  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showAlert, setShowAlert] = useState(false);

  if (!product) {
    return (
      <Container>
        <Typography variant="h4">Product not found</Typography>
      </Container>
    );
  }

  const colors = product.colors || [];
  const selectedColor = colors[selectedColorIndex];
  const images = selectedColor?.images || [product.image];
  const variants = selectedColor?.variants || [];

  const handleColorSelect = (index: number) => {
    setSelectedColorIndex(index);
    setCurrentImageIndex(0);
    setSelectedSize(''); // Reset size when color changes
  };

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
      return;
    }

    const selectedVariant = variants.find((v) => v.size === selectedSize);
    if (!selectedVariant || selectedVariant.availability === 0) {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
      return;
    }

    addToCart({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: images[0],
      color: selectedColor?.name || 'Default',
      size: selectedSize,
    });

    setShowAlert(false);
  };

  const handleBuyNow = () => {
    handleAddToCart();
    if (selectedSize) {
      navigate('/cart');
    }
  };

  const getSelectedVariant = () => {
    return variants.find((v) => v.size === selectedSize);
  };

  return (
    <Box className="product-detail">
      <Container maxWidth="lg">
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate(-1)}
          sx={{ mb: 3 }}
        >
          Back
        </Button>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 4,
          }}
        >
          {/* Image Carousel */}
          <Box>
            <Box className="product-images">
              <Box className="main-image-container">
                <IconButton
                  className="carousel-button carousel-button-left"
                  onClick={handlePreviousImage}
                  sx={{
                    position: 'absolute',
                    left: 10,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    '&:hover': { backgroundColor: 'rgba(255, 255, 255, 1)' },
                  }}
                >
                  <ArrowBackIosIcon />
                </IconButton>
                <img
                  src={images[currentImageIndex]}
                  alt={`${product.name} - ${currentImageIndex + 1}`}
                  className="main-image"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://via.placeholder.com/600x800?text=Product+Image';
                  }}
                />
                <IconButton
                  className="carousel-button carousel-button-right"
                  onClick={handleNextImage}
                  sx={{
                    position: 'absolute',
                    right: 10,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    '&:hover': { backgroundColor: 'rgba(255, 255, 255, 1)' },
                  }}
                >
                  <ArrowForwardIosIcon />
                </IconButton>
              </Box>

              {/* Thumbnail Images */}
              {images.length > 1 && (
                <Box className="thumbnail-container">
                  {images.map((image, index) => (
                    <Box
                      key={index}
                      className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                      onClick={() => setCurrentImageIndex(index)}
                    >
                      <img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            'https://via.placeholder.com/100x100?text=Image';
                        }}
                      />
                    </Box>
                  ))}
                </Box>
              )}
            </Box>
          </Box>

          {/* Product Info */}
          <Box>
            <Typography variant="h3" component="h1" gutterBottom>
              {product.name}
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Rating value={product.rating} readOnly precision={0.5} />
              <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                ({product.rating.toFixed(1)})
              </Typography>
            </Box>

            <Typography variant="h4" component="p" gutterBottom sx={{ mb: 3 }}>
              ${product.price.toFixed(2)}
            </Typography>

            <Typography variant="body1" paragraph sx={{ mb: 3 }}>
              {product.description}
            </Typography>

            {showAlert && (
              <Alert severity="warning" sx={{ mb: 2 }}>
                Please select a size before adding to cart
              </Alert>
            )}

            {/* Color Selection */}
            {colors.length > 0 && (
              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" gutterBottom>
                  Color: {selectedColor?.name || 'Default'}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  {colors.map((color, index) => (
                    <Chip
                      key={index}
                      label={color.name}
                      onClick={() => handleColorSelect(index)}
                      sx={{
                        backgroundColor:
                          index === selectedColorIndex ? color.hex : '#e0e0e0',
                        color:
                          index === selectedColorIndex && color.hex === '#FFFFFF'
                            ? '#000'
                            : index === selectedColorIndex
                            ? '#fff'
                            : '#000',
                        border: `2px solid ${index === selectedColorIndex ? '#667eea' : 'transparent'}`,
                        cursor: 'pointer',
                        '&:hover': {
                          backgroundColor: color.hex,
                          opacity: 0.8,
                        },
                      }}
                    />
                  ))}
                </Box>
              </Box>
            )}

            {/* Size Selection */}
            {variants.length > 0 && (
              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" gutterBottom>
                  Size
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  {variants.map((variant) => {
                    const isSelected = selectedSize === variant.size;
                    const isOutOfStock = variant.availability === 0;
                    return (
                      <Chip
                        key={variant.size}
                        label={`${variant.size} ${isOutOfStock ? '(Out of Stock)' : `(${variant.availability} available)`}`}
                        onClick={() => !isOutOfStock && handleSizeSelect(variant.size)}
                        disabled={isOutOfStock}
                        sx={{
                          backgroundColor: isSelected ? '#667eea' : '#e0e0e0',
                          color: isSelected ? '#fff' : '#000',
                          cursor: isOutOfStock ? 'not-allowed' : 'pointer',
                          opacity: isOutOfStock ? 0.5 : 1,
                          '&:hover': {
                            backgroundColor: isOutOfStock ? '#e0e0e0' : '#667eea',
                            color: isOutOfStock ? '#000' : '#fff',
                          },
                        }}
                      />
                    );
                  })}
                </Box>
              </Box>
            )}

            {/* Availability */}
            {selectedSize && getSelectedVariant() && (
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Availability: {getSelectedVariant()?.availability} items in stock
              </Typography>
            )}

            {/* Action Buttons */}
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="large"
                onClick={handleAddToCart}
                sx={{
                  flex: 1,
                  minWidth: '200px',
                  backgroundColor: '#667eea',
                  '&:hover': {
                    backgroundColor: '#5568d3',
                  },
                }}
              >
                Add to Cart
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={handleBuyNow}
                sx={{
                  flex: 1,
                  minWidth: '200px',
                  borderColor: '#667eea',
                  color: '#667eea',
                  '&:hover': {
                    borderColor: '#5568d3',
                    backgroundColor: 'rgba(102, 126, 234, 0.04)',
                  },
                }}
              >
                Buy Now
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ProductDetail;
