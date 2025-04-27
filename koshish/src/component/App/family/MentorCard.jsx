import React from "react";
import { useNavigate } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
const MentorCard = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div className="group cursor-pointer bg-green-100 border-2 border-green-300 shadow-lg rounded-3xl p-6 sm:p-8 text-center w-full max-w-xs transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-3 hover:scale-105">
      <div className="flex justify-center">
        <img
          src={item.image}
          alt={item.name}
          onClick={() => navigate(`/family/${item._id}`)}
          className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-2xl object-cover shadow-lg transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="mt-4 text-center bg-white rounded-lg shadow-inner p-4">
        {item.name !="NAN" &&<h2 className="text-lg sm:text-xl font-semibold text-blue10 mb-1">
          {item.name}
        
            {item.yog && <span className="text-sm ml-2 text-gray-800">{item.yog-4}-{item.yog-2000}</span>}
          
        </h2>}
        {item.speciality != "NAN" &&  <p className="text-sm sm:text-lg text-green-700 font-semibold mb-2">
          {item.speciality}
        </p>}
        {item.quote != "NAN" && <blockquote className="relative text-gray-600 text-sm sm:text-base italic bg-gray-100 p-4 rounded-lg shadow-md">
          <span className="absolute -top-2 -left-2 text-3xl sm:text-4xl text-green-500">
            “
          </span>
          <span className="px-4 block">{item.quote}</span>
          <span className="absolute -bottom-2 -right-2 text-3xl sm:text-4xl text-green-500">
            ”
          </span>
        </blockquote>}
      </div>
      <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
        {item.linkedin != "NAN" && (
          <a
            href={item.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 text-2xl transition-transform duration-300 hover:scale-110"
          >
            <FaLinkedin />
          </a>
        )}
        <button
          onClick={() => navigate(`/family/${item._id}`)}
          className="bg-green-600 text-white font-medium px-4 py-2 rounded-lg shadow-md transition-all duration-300 hover:bg-green-700 hover:scale-105"
        >
          View Profile
        </button>
      </div>
    </div>
  );
};

export default MentorCard;
