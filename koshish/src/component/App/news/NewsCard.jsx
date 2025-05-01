import React from 'react'
import { useNavigate } from 'react-router-dom';
const NewsCard = ({announcement}) => {
    const navigate = useNavigate();

  return (
    <div 
              key={announcement._id} 
              className="bg-green-100 rounded-xl shadow-lg overflow-hidden border border-gray-200 transition-transform duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <img
                className="w-full h-52 object-cover cursor-pointer"
                onClick={() => navigate(`/news/${announcement._id}`)}
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
  )
}

export default NewsCard