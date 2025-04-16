import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../../../context/App';

const MyMentor = () => {
 
      const { id } = useParams();
      const { myMentor, handelgetmyMentor } = useContext(AppContext);
  
      useEffect(() => {
          handelgetmyMentor(id);
      }, [id]);
  
      return (
          <div className="min-h-screen bg-green-50 flex items-center justify-center relative top-24 mb-32">
              <div className="max-w-4xl w-full bg-green-100 shadow-xl rounded-lg p-10 flex flex-col items-center">
                  {/* Heading */}
                  <h1 className="text-5xl font-extrabold text-blue10 mb-6">About the Mentor</h1>
                  
                  {/* Profile Image */}
                  <img
                      src={myMentor.image}
                      alt={myMentor.name}
                      className="w-48 h-48 rounded-xl shadow-lg border-2 border-blue-400 object-cover"
                  />
                  
                  {/* Name & Speciality */}
                  <h2 className="text-4xl font-bold text-gray-700 mt-6">{myMentor.name}</h2>
                  <p className="text-blue-700 text-lg font-medium mt-2">{myMentor.speciality}</p>
                  
                  {/* Quote */}
                  <blockquote className="relative text-gray-600 text-lg italic leading-relaxed bg-blue-100 p-6 mt-6 rounded-lg shadow-md text-center w-full max-w-2xl">
                      <span className="absolute -top-3 -left-3 text-5xl text-blue-500">“</span>
                      {myMentor.quote}
                      <span className="absolute -bottom-3 -right-3 text-5xl text-blue-500">”</span>
                  </blockquote>
  
                   {/* About Section */}
                <div className="mt-8 w-full text-center px-6">
                    <h3 className="text-3xl font-bold text-gray-800 underline decoration-blue-400 decoration-4 underline-offset-4">{myMentor.aboutHead}</h3>
                    <p className="text-gray-700 text-lg mt-4 leading-relaxed bg-gray-100 p-4 rounded-lg shadow-sm">{myMentor.about}</p>
                </div>
                
                  
                  {/* Details Section */}
                  <div className="mt-8 w-full text-center">
                      <p className="text-gray-800 text-lg font-semibold">📖 Subject: {myMentor.subject}</p>
                      <p className="text-gray-800 text-lg">👨‍🏫 Class Teacher: {myMentor.classTeacher}th </p>
                      <p className="text-gray-500 text-md mt-4">Joined on {new Date(myMentor.joinTime).toDateString()}</p>
                  </div>
                  
                  {/* Status Badge */}
                  <span className={`inline-block mt-6 px-5 py-2 text-lg font-semibold rounded-full ${myMentor.isActive === "true" ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"}`}>
                      {myMentor.isActive === "true" && "Active Mentor" }
                  </span>
              </div>
          </div>
      );
  };
 
  
export default MyMentor;
