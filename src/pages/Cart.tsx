import React, { useState } from 'react';
import { Minus, Plus, X } from 'lucide-react';
import type { CartItem } from '../types';

// Initial cart items
const initialCartItems: CartItem[] = [
  {
    id: 1,
    name: 'Espresso Blend',
    description: 'Rich and bold espresso blend',
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    category: 'coffee',
    prices: {
      small: 3.99,
      medium: 4.99,
      large: 5.99,
    },
    quantity: 2,
    selectedSize: 'medium',
  },
];

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);

  // Function to remove an item from the cart
  const removeItemFromCart = (itemId: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  // Calculate subtotal, tax, and total
  const subtotal = cartItems.reduce((total, item) => {
    return total + (item.prices[item.selectedSize] || 0) * item.quantity;
  }, 0);

  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + tax;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">Your cart is empty</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md p-6 flex items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-md"
                />
                <div className="ml-6 flex-grow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                      <p className="text-gray-600">Size: {item.selectedSize}</p>
                      <p className="text-gray-600">
                        ${item.prices[item.selectedSize]} each
                      </p>
                    </div>
                    <button
                      className="text-gray-400 hover:text-gray-500"
                      onClick={() => removeItemFromCart(item.id)} // Add onClick handler
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="mt-4 flex items-center">
                    <button className="text-gray-500 hover:text-gray-600">
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="mx-4 font-medium">{item.quantity}</span>
                    <button className="text-gray-500 hover:text-gray-600">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow-md p-6 h-fit">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between font-bold text-gray-900">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              <button className="w-full bg-brown-600 text-white py-3 rounded-md hover:bg-brown-700 transition duration-300">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}