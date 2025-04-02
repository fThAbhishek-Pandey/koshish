import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NoAnouncement from './NoAnouncement'
import { AppContext } from '../../../context/App';

const NewAnnouncement = () => {
  const { newAnnouncement, handleNewAnnouncement } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    handleNewAnnouncement();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">Latest Announcements</h1>
      {newAnnouncement && newAnnouncement.length !== 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newAnnouncement.map((announcement) => (
            <div 
              key={announcement._id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 transition-transform duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <img
                className="w-full h-52 object-cover cursor-pointer"
                onClick={() => navigate(`/announcement/${announcement._id}`)}
                src={announcement.image}
                alt={announcement.heading}
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-900">{announcement.heading}</h2>
                <p className="mt-2 text-gray-700 line-clamp-2">{announcement.announcement}</p>
                <p className="mt-2 text-gray-500 text-sm">Date: {new Date(announcement.date).toDateString()}</p>
                {announcement.isAtive && (
                  <span className="inline-block bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded mt-3">
                    Active
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <NoAnouncement />
      )}
    </div>
  );
};

export default NewAnnouncement;
