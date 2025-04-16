import React from 'react';

const ServerErr = () => {
  return (
    <div className="flex flex-col items-center justify-center h-64 w-full bg-red-50 text-red-600 text-center px-4">
      <h2 className="text-2xl font-semibold mb-2">Server Error</h2>
      <p className="text-base">Oops! Something went wrong on our end. Please try again later.</p>
    </div>
  );
};

export default ServerErr;
