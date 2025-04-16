import React from 'react';
import img404 from '../assets/404.png';

const Error404 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100 px-4 text-center">
      <h1 className="text-4xl sm:text-5xl font-bold text-red-600 mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-lg sm:text-xl text-gray-600 mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>
      <img
        src={img404}
        alt="404 Illustration"
        className="w-72 sm:w-96 mb-6"
      />
      <a
        href="/"
        className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-300"
      >
        Back to Home
      </a>
    </div>
  );
};

export default Error404;
