import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, Cake, Package, Star, Truck, Clock } from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: <Star className="w-6 h-6 text-brown-600" />,
      title: "Premium Quality",
      description: "Hand-selected beans from the world's finest coffee regions"
    },
    {
      icon: <Truck className="w-6 h-6 text-brown-600" />,
      title: "Fast Delivery",
      description: "Free shipping on orders over $50"
    },
    {
      icon: <Clock className="w-6 h-6 text-brown-600" />,
      title: "Fresh Roasted",
      description: "Beans roasted within 24 hours of delivery"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Coffee Enthusiast",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      quote: "The best coffee I've ever tasted. Their attention to detail is remarkable!"
    },
    {
      name: "Michael Chen",
      role: "Cafe Owner",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      quote: "Coffee Bliss has transformed how I think about coffee. Exceptional quality!"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4 text-center">Experience Coffee Paradise</h1>
          <p className="text-xl mb-8 text-center max-w-2xl">
            Discover our carefully curated selection of premium coffees and delightful snacks
          </p>
          <div className="flex space-x-4">
            <Link
              to="/products"
              className="bg-brown-600 text-white px-8 py-3 rounded-full hover:bg-brown-700 transition duration-300"
            >
              Shop Now
            </Link>
            <Link
              to="/about"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-gray-900 transition duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-8 text-center">
                <div className="inline-block p-3 bg-brown-50 rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Categories */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <Coffee className="w-12 h-12 mx-auto mb-4 text-brown-600" />
            <h3 className="text-xl font-semibold mb-2">Premium Coffee</h3>
            <p className="text-gray-600 mb-4">
              Expertly roasted beans from around the world
            </p>
            <Link to="/products" className="text-brown-600 hover:text-brown-700">
              View Collection →
            </Link>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <Cake className="w-12 h-12 mx-auto mb-4 text-brown-600" />
            <h3 className="text-xl font-semibold mb-2">Fresh Snacks</h3>
            <p className="text-gray-600 mb-4">
              Delicious treats to complement your coffee
            </p>
            <Link to="/products" className="text-brown-600 hover:text-brown-700">
              View Collection →
            </Link>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <Package className="w-12 h-12 mx-auto mb-4 text-brown-600" />
            <h3 className="text-xl font-semibold mb-2">Special Combos</h3>
            <p className="text-gray-600 mb-4">
              Perfect pairings at great prices
            </p>
            <Link to="/products" className="text-brown-600 hover:text-brown-700">
              View Collection →
            </Link>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-brown-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}