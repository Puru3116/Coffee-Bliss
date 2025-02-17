import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, ShoppingCart, User } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Coffee className="h-8 w-8 text-brown-600" />
              <span className="text-xl font-bold text-gray-900">Coffee Bliss</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-8">
            <Link to="/products" className="text-gray-700 hover:text-gray-900">Products</Link>
            <Link to="/about" className="text-gray-700 hover:text-gray-900">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
            <Link to="/cart" className="text-gray-700 hover:text-gray-900">
              <ShoppingCart className="h-6 w-6" />
            </Link>
            <Link to="/profile" className="text-gray-700 hover:text-gray-900">
              <User className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}