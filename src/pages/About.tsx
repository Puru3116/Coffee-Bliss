import React from 'react';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Story</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Bringing the finest coffee experiences to your cup since 2020
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <img
            src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Coffee beans being roasted"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-6">
            At Coffee Bliss, we believe that every cup of coffee tells a story. Our mission is to source the finest coffee beans from sustainable farms around the world and bring them to your cup with the care and expertise they deserve.
          </p>
          <p className="text-gray-600">
            We work directly with farmers who share our passion for quality and sustainability, ensuring that every bean meets our exacting standards while supporting the communities that grow them.
          </p>
        </div>
      </div>

      <div className="bg-brown-50 rounded-lg p-12 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality First</h3>
            <p className="text-gray-600">
              We never compromise on quality, from bean selection to brewing methods.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Sustainability</h3>
            <p className="text-gray-600">
              Environmental responsibility and ethical sourcing guide every decision.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Community</h3>
            <p className="text-gray-600">
              Building lasting relationships with farmers and customers alike.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <img
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Coffee shop ambiance"
          className="rounded-lg shadow-lg mb-8 w-full h-96 object-cover"
        />
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Journey</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Every cup of Coffee Bliss is a step in our journey to make the world a better place, one perfect brew at a time. We invite you to be part of our story.
        </p>
      </div>
    </div>
  );
}