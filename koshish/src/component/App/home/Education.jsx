import React, { useState, useEffect } from 'react';
import education from '../../../assets/edu.png';
import { LiaUserGraduateSolid, LiaUniversitySolid } from 'react-icons/lia';

const Education = () => {
  const [student, setStudent] = useState(0);
  const [story, setStory] = useState(0);

  useEffect(() => {
    const studentTarget = 1000;
    const storyTarget = 100;

    const interval = setInterval(() => {
      setStudent((prev) => (prev < studentTarget ? prev + 20 : studentTarget));
      setStory((prev) => (prev < storyTarget ? prev + 2 : storyTarget));

      if (student >= studentTarget && story >= storyTarget) {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [student, story]);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-10 p-6 md:p-12">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={education}
          alt="Education Illustration"
          className="w-[85%] md:w-[80%] rounded-2xl bg-green-100 p-4 shadow-lg"
        />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 text-left space-y-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue10">Education is Life</h2>
        <p className="text-gray-600 text-base sm:text-lg">
          At KOSHISH, we believe education is the foundation for a better tomorrow. 
          We strive to empower students with the knowledge and confidence they need to transform their lives and create impact in society.
        </p>

        {/* Stats Section */}
        <div className="space-y-4">
          <div className="flex items-center text-xl sm:text-2xl font-semibold">
            <LiaUserGraduateSolid className="text-white bg-blue10 p-2 rounded-full mr-3 text-4xl" />
            <span className="text-green00">{student}+</span>
            <span className="text-base font-normal ml-2">Students Joined</span>
          </div>

          <div className="flex items-center text-xl sm:text-2xl font-semibold">
            <LiaUniversitySolid className="text-white bg-blue10 p-2 rounded-full mr-3 text-4xl" />
            <span className="text-green00">{story}+</span>
            <span className="text-base font-normal ml-2">Success Stories</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
