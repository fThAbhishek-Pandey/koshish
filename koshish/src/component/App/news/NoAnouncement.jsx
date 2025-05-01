import React from 'react';
import noAnouncement from '../../../assets/NoAnouncement.svg';

const NoAnouncement = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-64 sm:h-80 bg-green-100 text-gray-600 px-4 text-center rounded-lg shadow-sm">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4">No Announcements Yet</h2>
      <img
        src={noAnouncement}
        alt="No Announcement"
        className="w-40 sm:w-52"
      />
    </div>
  );
};

export default NoAnouncement;
