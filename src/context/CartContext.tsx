import React, { createContext, useContext, useState, useRef, ReactNode } from 'react';

export interface CartItem {
  id: number;
  productId: number;
  name: string;
  price: number;
  image: string;
  color: string;
  size: string;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, 'id' | 'quantity'>) => void;
  removeFromCart: (itemId: number) => void;
  updateQuantity: (itemId: number, quantity: number) => void;
  getCartItemCount: () => number;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const nextIdRef = useRef(1);

  const addToCart = (item: Omit<CartItem, 'id' | 'quantity'>) => {
    setCartItems((prevItems) => {
      // Check if item with same productId, color, and size already exists
      const existingItemIndex = prevItems.findIndex(
        (existingItem) =>
          existingItem.productId === item.productId &&
          existingItem.color === item.color &&
          existingItem.size === item.size
      );

      if (existingItemIndex >= 0) {
        // Update quantity if item exists
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += 1;
        return updatedItems;
      } else {
        // Add new item
        const newId = nextIdRef.current++;
        return [...prevItems, { ...item, id: newId, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (itemId: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const updateQuantity = (itemId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };

  const getCartItemCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        getCartItemCount,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
