import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../../context/App';
import Loader from '../../Loader';
import ServerErr from '../../SeverErr';
import { BsLinkedin } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
const Mentor = () => {
  const { TopMentor, handleTopMentor } = useContext(AppContext);
  const [isLoaded, setIsLoaded] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    handleTopMentor();
  }, []);

  useEffect(() => {
    if (TopMentor && TopMentor !== '5xx' && TopMentor.length !== 0) {
      setIsLoaded(false);
    }
  }, [TopMentor]);

  const teachers = TopMentor;

  return (
    <div className="pb-20 sm:pb-16 md:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue10 pt-16 text-center">
          Our Mentors
        </h1>
        <p className="w-full sm:w-[80%] md:w-[65%] lg:w-[50%] my-8 text-gray-500 text-center mx-auto text-base sm:text-lg">
        The teachers at KOSHISH are highly dedicated and experienced, with a deep understanding of exactly what content best supports student learning.
        </p>

        {isLoaded ? (
          <Loader />
        ) : teachers === '5xx' ? (
          <ServerErr />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 mt-8">
            {teachers.map((teacher) => {
              const joinYear = new Date(teacher.joinTime).getFullYear();

              return (
                <div
                  key={teacher._id}
                  className="group bg-green-100 border border-blue-200 shadow-md rounded-2xl p-6 text-center transition-transform hover:scale-[1.03] duration-300"
                >
                  <div className="flex justify-center mb-4">
                    <img
                      src={teacher.image}
                      onClick={()=>navigate(`/family/${teacher._id}`)}
                      alt={teacher.name}
                      className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full object-cover shadow-lg transition-transform duration-300 group-hover:scale-110"
                    />
                  </div >
                  <div className='flex justify-around'>
                  <h2 
                   onClick={()=>navigate(`/family/${teacher._id}`)}
                  className="text-xl font-bold text-blue10">{teacher.name}</h2>

                  {teacher.linkedin != "NAN" && (<a
                    href={teacher.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 mt-2 text-blue-700 text-sm font-semibold hover:underline"
                  >
                    <BsLinkedin className="text-blue-700 text-lg" />
                  </a>)}
                  </div>
                  <p className="text-sm text-green-600 font-medium mt-2">{teacher.speciality}</p>
                  <p className="text-xs text-gray-500 mt-1">Joined in {joinYear}</p>

                  <blockquote className="text-sm italic text-gray-600 mt-3">
                    “{teacher.quote.replace(/^["']|["']$/g, '')}”
                  </blockquote>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Mentor;
