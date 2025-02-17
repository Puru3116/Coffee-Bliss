import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee } from 'lucide-react';

export default function Profile() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <Coffee className="mx-auto h-12 w-12 text-brown-600" />
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Welcome to Coffee Bliss</h2>
          <p className="mt-2 text-sm text-gray-600">
            Please sign in to access your profile
          </p>
        </div>
        <div className="space-y-4">
          <Link
            to="/auth"
            className="w-full inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brown-600 hover:bg-brown-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brown-500"
          >
            Sign In
          </Link>
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/auth" className="font-medium text-brown-600 hover:text-brown-500">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}