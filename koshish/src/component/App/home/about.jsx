import React, { useContext, useEffect } from "react";
import { FaLinkedin } from "react-icons/fa6";
import {
  FaChalkboardTeacher,
  FaHandsHelping,
  FaUsers,
  FaArrowUp,
} from "react-icons/fa";
import { AppContext } from "../../../context/App";
import Aboutimg from "../../../assets/about.svg";
import { useNavigate } from "react-router-dom";

const About = () => {
  const { coOrdi, handleCoOrdinator } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    handleCoOrdinator();
  }, []);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="pb-4 sm:pb-16 md:pb-6 lg:pb-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl my-4 md:text-5xl font-bold text-blue10 pt-16 text-center">
      Our Guiding Lights
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4 md:px-8 py-2 sm:py-4 lg:py-3 bg-green-50 ">
        {coOrdi ? (
          <div className="group bg-green-100 border border-gray-200 shadow-md rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <img
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover shadow-md transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                src={coOrdi.image}
                alt={coOrdi.name}
                onClick={() => navigate(`/family/${coOrdi._id}`)}
              />
              <div className="text-center sm:text-left flex flex-col gap-2 w-full">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <div
                    onClick={() => navigate(`/family/${coOrdi._id}`)}
                    className="font-bold text-xl md:text-2xl text-blue10 cursor-pointer"
                  >
                    {coOrdi.name}
                  </div>
                  {coOrdi.linkedin !== "NAN" && (
                    <a
                      href={coOrdi.linkedin}
                      target="_blank"
                      className="text-blue-600 hover:text-blue-800 text-2xl sm:text-3xl"
                    >
                      <FaLinkedin />
                    </a>
                  )}
                </div>
                <div className="text-gray-700 text-base sm:text-lg italic font-medium">
                  {coOrdi.speciality}
                </div>
                <div className="text-gray-500 text-sm">
                  Joined on {formatDate(coOrdi.joinTime)}
                </div>
              </div>
            </div>
            <div className="mt-5 text-gray-600 text-sm sm:text-base p-4 bg-gray-50 rounded-lg border-l-4 border-blue-500">
              {coOrdi.quote}
            </div>
          </div>
        ) : (
          <div className="flex justify-center">
            <img
              src={Aboutimg}
              alt="Koshish illustration"
              className="w-full max-w-md h-auto object-contain bg-green-100 rounded-xl shadow-md"
            />
          </div>
        )}

        <div className="text-left space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-green-500">
            Empowering Futures Through Koshish
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Dive into the spirit of Koshish, where every effort counts. Merging
            compassion with commitment, Koshish builds a foundation of hope
            through education, mentorship, and sustained support. Together, we
            nurture brighter tomorrows.
          </p>
          <p className="text-gray-600 font-semibold">
            Transforming Intentions into Impact: Mastering the 4 E's of social
            upliftment.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mt-6">
            <div className="flex items-center">
              <FaChalkboardTeacher className="bg-green-500 text-white rounded-full p-2 text-3xl sm:text-4xl mr-4" />
              <span className="font-medium text-blue10 text-sm sm:text-base">
                Educate
              </span>
            </div>
            <div className="flex items-center">
              <FaHandsHelping className="bg-green-500 text-white rounded-full p-2 text-3xl sm:text-4xl mr-4" />
              <span className="font-medium text-blue10 text-sm sm:text-base">
                Empower
              </span>
            </div>
            <div className="flex items-center">
              <FaUsers className="bg-green-500 text-white rounded-full p-2 text-3xl sm:text-4xl mr-4" />
              <span className="font-medium text-blue10 text-sm sm:text-base">
                Engage
              </span>
            </div>
            <div className="flex items-center">
              <FaArrowUp className="bg-green-500 text-white rounded-full p-2 text-3xl sm:text-4xl mr-4" />
              <span className="font-medium text-blue10 text-sm sm:text-base">
                Elevate
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
