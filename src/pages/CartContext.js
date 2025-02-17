// CartContext.js
import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add a product to the cart
  const addToCart = (product, selectedSize) => {
    const existingItem = cartItems.find(
      (item) => item.id === product.id && item.selectedSize === selectedSize
    );

    if (existingItem) {
      // If the item already exists, increase its quantity
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === product.id && item.selectedSize === selectedSize
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // If the item doesn't exist, add it to the cart
      setCartItems((prevItems) => [
        ...prevItems,
        {
          ...product,
          selectedSize,
          quantity: 1,
        },
      ]);
    }
  };

  // Remove a product from the cart
  const removeItemFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeItemFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);