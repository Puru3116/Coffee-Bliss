import React, { useState } from 'react';
import { Coffee, Cake } from 'lucide-react';
import type { Product } from '../types';

const products: Product[] = [
  {
    id: 1,
    name: 'Espresso Blend',
    description: 'Rich and bold espresso blend with notes of dark chocolate and caramel',
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    category: 'coffee',
    prices: {
      small: 3.99,
      medium: 4.99,
      large: 5.99
    }
  },
  {
    id: 2,
    name: 'Chocolate Croissant',
    description: 'Buttery, flaky croissant filled with rich chocolate',
    image: 'https://images.unsplash.com/photo-1549903072-7e6e0bedb7fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    category: 'snacks',
    prices: {
      small: 3.49
    }
  },
  {
    id: 3,
    name: 'Ethiopian Yirgacheffe',
    description: 'Light roasted single-origin coffee with floral and citrus notes',
    image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    category: 'coffee',
    prices: {
      small: 4.49,
      medium: 5.49,
      large: 6.49
    }
  },
  {
    id: 4,
    name: 'Almond Biscotti',
    description: 'Twice-baked Italian cookies with almonds and vanilla',
    image: 'https://images.unsplash.com/photo-1619758660588-9caa8aae4d8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    category: 'snacks',
    prices: {
      small: 2.99
    }
  },
  {
    id: 5,
    name: 'Colombian Supremo',
    description: 'Medium roasted coffee with balanced sweetness and nutty undertones',
    image: 'https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    category: 'coffee',
    prices: {
      small: 3.99,
      medium: 4.99,
      large: 5.99
    }
  },
  {
    id: 6,
    name: 'Breakfast Combo',
    description: 'Any size coffee with a pastry of your choice',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    category: 'combos',
    prices: {
      small: 5.99,
      medium: 6.99,
      large: 7.99
    }
  }
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'coffee' | 'snacks' | 'combos'>('all');

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Products</h1>
      
      {/* Category Filter */}
      <div className="flex space-x-4 mb-8">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-4 py-2 rounded-full ${
            selectedCategory === 'all' 
              ? 'bg-brown-600 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          All
        </button>
        <button
          onClick={() => setSelectedCategory('coffee')}
          className={`px-4 py-2 rounded-full flex items-center space-x-2 ${
            selectedCategory === 'coffee' 
              ? 'bg-brown-600 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <Coffee className="w-4 h-4" />
          <span>Coffee</span>
        </button>
        <button
          onClick={() => setSelectedCategory('snacks')}
          className={`px-4 py-2 rounded-full flex items-center space-x-2 ${
            selectedCategory === 'snacks' 
              ? 'bg-brown-600 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <Cake className="w-4 h-4" />
          <span>Snacks</span>
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map(product => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              
              {/* Size Selection */}
              {product.prices.small && (
                <div className="mb-4">
                  <p className="font-medium text-gray-700 mb-2">Size:</p>
                  <div className="flex space-x-4">
                    {Object.entries(product.prices).map(([size, price]) => (
                      <div key={size} className="text-center">
                        <span className="block text-sm font-medium text-gray-900 capitalize">{size}</span>
                        <span className="block text-gray-600">${price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <button className="w-full bg-brown-600 text-white py-2 rounded-md hover:bg-brown-700 transition duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}