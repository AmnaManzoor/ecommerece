import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Divider,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCart } from '../context/CartContext';
import { PRIMARY_COLOR, PRIMARY_HOVER } from '../constants/theme';
import './Cart.css';

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

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const handleDecrement = (itemId: number, currentQuantity: number) => {
    if (currentQuantity > 1) {
      updateQuantity(itemId, currentQuantity - 1);
    } else {
      removeFromCart(itemId);
    }
  };

  const subtotal = useMemo(
    () => cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
    [cartItems]
  );

  const cartItemCount = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems]
  );

  if (cartItems.length === 0) {
    return (
      <Container maxWidth="lg" sx={{ py: 8, textAlign: 'center' }}>
        <ShoppingCartIcon sx={{ fontSize: 80, color: '#ccc', mb: 2 }} />
        <Typography variant="h4" gutterBottom>
          Your cart is empty
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Start shopping to add items to your cart
        </Typography>
        <Button variant="contained" size="large" onClick={() => navigate('/')} sx={buttonSx}>
          Continue Shopping
        </Button>
      </Container>
    );
  }

  return (
    <Box className="cart-page">
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Shopping Cart ({cartItemCount} {cartItemCount === 1 ? 'item' : 'items'})
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '2fr 1fr' },
            gap: 4,
            mt: 2,
          }}
        >
          {/* Cart Items */}
          <Box>
            {cartItems.map((item) => (
              <Card key={item.id} sx={{ mb: 2 }}>
                <CardContent>
                  <Box
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: { xs: '1fr', sm: 'auto 1fr auto' },
                      gap: 3,
                      alignItems: 'center',
                    }}
                  >
                    {/* Product Image */}
                    <Box sx={{ width: { xs: '100%', sm: '150px' } }}>
                      <CardMedia
                        component="img"
                        image={item.image}
                        alt={item.name}
                        sx={{
                          width: '100%',
                          height: '150px',
                          objectFit: 'cover',
                          borderRadius: 1,
                          cursor: 'pointer',
                        }}
                        onClick={() => navigate(`/product/${item.productId}`)}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://via.placeholder.com/200x200?text=Product+Image';
                        }}
                      />
                    </Box>

                    {/* Product Details */}
                    <Box>
                      <Typography
                        variant="h6"
                        component="h3"
                        gutterBottom
                        sx={{ cursor: 'pointer' }}
                        onClick={() => navigate(`/product/${item.productId}`)}
                      >
                        {item.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        Color: {item.color}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        Size: {item.size}
                      </Typography>
                      <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
                        ${item.price.toFixed(2)}
                      </Typography>
                    </Box>

                    {/* Quantity Controls */}
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: { xs: 'flex-start', sm: 'flex-end' },
                        gap: 2,
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                          border: '1px solid #e0e0e0',
                          borderRadius: 1,
                        }}
                      >
                        <IconButton
                          size="small"
                          onClick={() => handleDecrement(item.id, item.quantity)}
                          sx={{
                            '&:hover': {
                              backgroundColor: 'rgba(102, 126, 234, 0.1)',
                            },
                          }}
                        >
                          <RemoveIcon />
                        </IconButton>
                        <Typography
                          variant="body1"
                          sx={{ minWidth: '30px', textAlign: 'center' }}
                        >
                          {item.quantity}
                        </Typography>
                        <IconButton
                          size="small"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          sx={{
                            '&:hover': {
                              backgroundColor: 'rgba(102, 126, 234, 0.1)',
                            },
                          }}
                        >
                          <AddIcon />
                        </IconButton>
                      </Box>

                      <IconButton
                        color="error"
                        onClick={() => removeFromCart(item.id)}
                        sx={{
                          '&:hover': {
                            backgroundColor: 'rgba(211, 47, 47, 0.1)',
                          },
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>

                      <Typography variant="h6" sx={{ mt: 1 }}>
                        ${(item.price * item.quantity).toFixed(2)}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>

          {/* Order Summary */}
          <Box>
            <Card sx={{ position: { md: 'sticky' }, top: 20 }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Order Summary
                </Typography>
                <Divider sx={{ my: 2 }} />

                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body1">Subtotal:</Typography>
                  <Typography variant="body1">${subtotal.toFixed(2)}</Typography>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body1">Shipping:</Typography>
                  <Typography variant="body1">Free</Typography>
                </Box>

                <Divider sx={{ my: 2 }} />

                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                  <Typography variant="h6">Total:</Typography>
                  <Typography variant="h6" color="primary">
                    ${subtotal.toFixed(2)}
                  </Typography>
                </Box>

                <Button variant="contained" fullWidth size="large" sx={{ mb: 2, ...buttonSx }}>
                  Proceed to Checkout
                </Button>

                <Button variant="outlined" fullWidth onClick={() => navigate('/')} sx={outlinedButtonSx}>
                  Continue Shopping
                </Button>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Cart;
