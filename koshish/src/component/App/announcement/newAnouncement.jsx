import React, { useContext, useEffect } from 'react';

import NoAnouncement from './NoAnouncement'
import { AppContext } from '../../../context/App';
import NewsCard from './NewsCard';
const NewAnnouncement = () => {
  const { newAnnouncement, handleNewAnnouncement } = useContext(AppContext);
 
  useEffect(() => {
    handleNewAnnouncement();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="w-full px-4 py-12">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue10 mb-6">
            Meet Our Visionary
          </h2>
          <p className="text-md sm:text-xl font-sm text-gray-700 leading-relaxed">
            Our mentors are the backbone of Koshish, actively contributing their
            time, skills, and passion to uplift underprivileged students.
            Through consistent efforts and dedication, they guide, teach, and
            inspire children to dream big and achieve more. Their hard work
            plays a crucial role in shaping a better future for the students and
            the community.
          </p>
        </div>
      </div>
      {newAnnouncement && newAnnouncement.length !== 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newAnnouncement.map((announcement) => (
            <NewsCard announcement={announcement} />
          ))}
        </div>
      ) : (
        <NoAnouncement />
      )}
    </div>
  );
};

export default NewAnnouncement;
