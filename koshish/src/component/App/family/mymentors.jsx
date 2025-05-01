import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../../../context/App';
import { FaLinkedin } from "react-icons/fa";

const MyMentor = () => {
  const { id } = useParams();
  const {docuTitle, setDocuTitle, myMentor, handelgetmyMentor } = useContext(AppContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMentor = async () => {
      setLoading(true);
      await handelgetmyMentor(id);
      setLoading(false);
    };
    fetchMentor();
  }, [id]);
       useEffect(()=>{
           setDocuTitle(`${myMentor.name}-Koshish`)
       },[docuTitle,id,myMentor])
  if (loading || !myMentor) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-green-50 pt-24">
        <p className="text-xl font-semibold text-blue10 animate-pulse">
          Loading mentor details...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center pt-24 px-4 pb-32">
      <div className="max-w-4xl w-full bg-green-100 shadow-2xl rounded-2xl p-8 md:p-12 flex flex-col items-center text-center space-y-8">

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-blue10">
          About the Mentor
        </h1>

        {/* Mentor Image */}
        <img
          src={myMentor.image || 'https://via.placeholder.com/150'}
          alt={myMentor.name || 'Mentor Photo'}
          className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover border-4 border-blue-300 shadow-lg"
        />

        {/* Mentor Name and Year */}
        <div>
          <h2 className="text-2xl md:text-4xl font-bold text-blue10">
            {myMentor.name || 'Unnamed Mentor'}
          </h2>
          {myMentor.yog !== 'NAN' && (
            <p className="text-blue-500 text-lg mt-1">
              {myMentor.yog - 4} - {myMentor.yog-2000}
            </p>
          )}
        </div>

        {/* Speciality */}
        {myMentor.speciality !== 'NAN' && (
          <p className="text-blue-600 text-lg font-semibold">
            {myMentor.speciality}
          </p>
        )}

        {/* Quote */}
        {myMentor.quote !== 'NAN' && (
          <blockquote className="relative text-gray-600 text-lg italic bg-blue-50 p-6 rounded-lg shadow-inner max-w-2xl">
            <span className="absolute -top-5 left-5 text-5xl text-blue-400">“</span>
            <span className="block px-4">{myMentor.quote}</span>
            <span className="absolute -bottom-5 right-5 text-5xl text-blue-400">”</span>
          </blockquote>
        )}

        {/* About Section */}
        {(myMentor.aboutHead !== 'NAN' || myMentor.about !== 'NAN') && (
          <div className="w-full text-left space-y-4">
            {myMentor.aboutHead !== 'NAN' && (
              <h3 className="text-2xl font-bold text-blue-700 border-b-2 border-blue-400 pb-2">
                {myMentor.aboutHead}
              </h3>
            )}
            {myMentor.about !== 'NAN' && (
              <p className="text-gray-700 text-lg bg-gray-50 p-4 rounded-md shadow">
                {myMentor.about}
              </p>
            )}
          </div>
        )}

        {/* Details */}
        <div className="w-full flex flex-col items-start space-y-2">
          {myMentor.subject !== 'NAN' && (
            <p className="text-gray-800 text-lg"><strong>📖 Subject:</strong> {myMentor.subject}</p>
          )}
          {myMentor.classTeacher !== 'NAN' && (
            <p className="text-gray-800 text-lg"><strong>👨‍🏫 Class Teacher:</strong> {myMentor.classTeacher}</p>
          )}
          {myMentor.joinTime && (
            <p className="text-gray-600 text-sm">
              Joined on {new Date(myMentor.joinTime).toDateString()}
            </p>
          )}
          {myMentor.linkedin !== 'NAN' && (
            <div className="flex items-center space-x-2 pt-2">
              <span className="text-gray-700 text-lg font-semibold">🔗 Contact: </span>
              <a
                href={myMentor.linkedin}
                target="_blank"
                className="text-blue-600 hover:text-blue-800 text-2xl transition-transform duration-300 hover:scale-110"
              >
                <FaLinkedin />
              </a>
            </div>
          )}
        </div>

        {/* Active Status */}
        {myMentor.isActive && (
          <span className="inline-block mt-4 px-6 py-2 text-lg font-semibold bg-green-200 text-green-800 rounded-full">
            Active Mentor
          </span>
        )}

      </div>
    </div>
  );
};

export default MyMentor;
