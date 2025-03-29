import React, { useContext, useEffect } from "react";
import { FaLinkedin } from "react-icons/fa";
import { AppContext } from "../../../context/App";
import { useNavigate } from "react-router-dom";
import ServerErr from "../../SeverErr";
const IndexMentor = () => {
  const { allMentor, handelgetAllMentor } = useContext(AppContext);
  const navigate = useNavigate();
  useEffect(() => {
    handelgetAllMentor();
  }, []);
  return (
    <div>
      this is mentor section
      <div className=" bg-green-50 p-5 m-2">
        {allMentor && (
          <div className="flex gap-2   justify-evenly ">
            {allMentor=='5xx'? <ServerErr />:  allMentor.map((item, idx) => {
              return (
                <div
                key={idx}
                // onClick={() => navigate(`/mentors/${item._id}`)}
                className="group cursor-pointer bg-green-100 border-2 border-green-300 shadow-lg rounded-3xl p-6 sm:p-8 text-center w-full sm:w-[48%] lg:w-[30%] xl:w-[22%] m-3 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-3 hover:scale-105"
              >
                {/* Profile Image */}
                <div className="flex justify-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    onClick={() => navigate(`/mentors/${item._id}`)}
                    className="w-40 cursor-pointer sm:w-48 md:w-56 lg:w-64 rounded-2xl object-cover shadow-lg transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
          
                {/* Details Section */}
                <div className="mt-6 text-center px-6 py-4 bg-white rounded-lg shadow-inner">
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                    {item.name}
                  </h2>
                  <p className="text-sm sm:text-xl text-green-700 font-semibold mb-3">
                    {item.speciality}
                  </p>
                  <blockquote className="relative text-gray-600 text-sm sm:text-base italic leading-relaxed bg-gray-100 p-6 rounded-lg shadow-md">
                    <span className="absolute -top-2 -left-2 text-5xl text-green-500">“</span>
                    <span className="px-6 block">{item.quote}</span>
                    <span className="absolute -bottom-2 -right-2 text-5xl text-green-500">”</span>
                  </blockquote>
                </div>
          
                {/* LinkedIn & Call to Action */}
                <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={item.linkedin}
                    target="_blank"
                    className="text-blue-600 hover:text-blue-800 text-3xl transition-transform duration-300 hover:scale-110"
                  >
                    <FaLinkedin />
                  </a>
                  <button 
                   onClick={() => navigate(`/mentors/${item._id}`)}
                  className="bg-green-600 cursor-pointer text-white font-medium px-4 py-2 rounded-lg shadow-md transition-all duration-300 hover:bg-green-700 hover:scale-105">
                    View Profile
                  </button>
                </div>
              </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default IndexMentor;
