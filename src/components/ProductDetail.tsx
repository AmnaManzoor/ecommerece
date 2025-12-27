import { useState, useEffect, useMemo, useCallback, type SyntheticEvent } from 'react';
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
import { PRIMARY_COLOR, PRIMARY_HOVER, ALERT_TIMEOUT } from '../constants/theme';
import './ProductDetail.css';

const buttonSx = {
  backgroundColor: PRIMARY_COLOR,
  '&:hover': { backgroundColor: PRIMARY_HOVER },
};

const outlinedButtonSx = {
  borderColor: PRIMARY_COLOR,
  color: PRIMARY_COLOR,
  '&:hover': {
    borderColor: PRIMARY_HOVER,
    backgroundColor: 'rgba(102, 126, 234, 0.04)',
  },
};

const handleImageError = (e: SyntheticEvent<HTMLImageElement>) => {
  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/600x800?text=Product+Image';
};

const handleThumbnailError = (e: SyntheticEvent<HTMLImageElement>) => {
  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/100x100?text=Image';
};

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const productId = parseInt(id || '0', 10);
  const product = products.find((p) => p.id === productId);

  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showAlert, setShowAlert] = useState(false);

  // Compute derived values using useMemo before any early returns
  const colors = useMemo(() => product?.colors || [], [product?.colors]);
  const validColorIndex = useMemo(
    () => (selectedColorIndex >= 0 && selectedColorIndex < colors.length ? selectedColorIndex : 0),
    [selectedColorIndex, colors.length]
  );
  const selectedColor = useMemo(() => colors[validColorIndex], [colors, validColorIndex]);
  const images = useMemo(() => selectedColor?.images || [product?.image || ''], [selectedColor?.images, product?.image]);
  const variants = useMemo(() => selectedColor?.variants || [], [selectedColor?.variants]);

  const selectedVariant = useMemo(
    () => variants.find((v) => v.size === selectedSize),
    [variants, selectedSize]
  );

  // Reset state when product changes
  useEffect(() => {
    setSelectedColorIndex(0);
    setSelectedSize('');
    setCurrentImageIndex(0);
    setShowAlert(false);
  }, [productId]);

  // Ensure selectedColorIndex is valid when colors change
  useEffect(() => {
    if (colors.length > 0 && selectedColorIndex >= colors.length) {
      setSelectedColorIndex(0);
    }
  }, [colors.length, selectedColorIndex]);

  const handleColorSelect = useCallback((index: number) => {
    setSelectedColorIndex(index);
    setCurrentImageIndex(0);
    setSelectedSize('');
  }, []);

  const handleSizeSelect = useCallback((size: string) => {
    setSelectedSize(size);
  }, []);

  const handlePreviousImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const handleNextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const showAlertAndHide = useCallback(() => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), ALERT_TIMEOUT);
  }, []);

  const handleAddToCart = useCallback(() => {
    if (!product || !selectedSize || !selectedVariant || selectedVariant.availability === 0) {
      showAlertAndHide();
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
  }, [selectedSize, selectedVariant, product, images, selectedColor, addToCart, showAlertAndHide]);

  const handleBuyNow = useCallback(() => {
    if (selectedSize && selectedVariant && selectedVariant.availability > 0) {
      handleAddToCart();
      navigate('/cart');
    }
  }, [selectedSize, selectedVariant, handleAddToCart, navigate]);

  // Early return AFTER all hooks
  if (!product) {
    return (
      <Container>
        <Typography variant="h4">Product not found</Typography>
      </Container>
    );
  }

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
                  onError={handleImageError}
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
                      <img src={image} alt={`Thumbnail ${index + 1}`} onError={handleThumbnailError} />
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
                  Color: {selectedColor?.name || 'N/A'}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  {colors.map((color, index) => (
                    <Chip
                      key={index}
                      label={color.name}
                      onClick={() => handleColorSelect(index)}
                      sx={{
                        backgroundColor:
                          index === validColorIndex ? color.hex : '#e0e0e0',
                        color:
                          index === validColorIndex && color.hex === '#FFFFFF'
                            ? '#000'
                            : index === validColorIndex
                            ? '#fff'
                            : '#000',
                        border: `2px solid ${index === validColorIndex ? PRIMARY_COLOR : 'transparent'}`,
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
                          backgroundColor: isSelected ? PRIMARY_COLOR : '#e0e0e0',
                          color: isSelected ? '#fff' : '#000',
                          cursor: isOutOfStock ? 'not-allowed' : 'pointer',
                          opacity: isOutOfStock ? 0.5 : 1,
                          '&:hover': {
                            backgroundColor: isOutOfStock ? '#e0e0e0' : PRIMARY_COLOR,
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
            {selectedSize && selectedVariant && (
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Availability: {selectedVariant.availability} items in stock
              </Typography>
            )}

            {/* Action Buttons */}
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button variant="contained" size="large" onClick={handleAddToCart} sx={{ flex: 1, minWidth: '200px', ...buttonSx }}>
                Add to Cart
              </Button>
              <Button variant="outlined" size="large" onClick={handleBuyNow} sx={{ flex: 1, minWidth: '200px', ...outlinedButtonSx }}>
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
