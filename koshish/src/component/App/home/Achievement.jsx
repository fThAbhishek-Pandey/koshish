import React from 'react';
import AchivIll from '../../../assets/faci.svg';

const Achievement = () => {
  return (
    <div className="px-6 py-16 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-blue10 text-center mb-4">Our Work</h2>
      <p className="max-w-4xl mx-auto text-center text-gray-700 text-lg mb-10">
        With the dedication of our team, KOSHISH has built a nurturing environment where students can gain knowledge, sharpen their skills, and confidently showcase their talents.
      </p>

      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Text Section */}
        <div className="w-full md:w-[55%] space-y-6">
          <h3 className="text-2xl font-semibold text-blue10">Our Facilities</h3>
          <ul className="list-disc list-inside text-gray-800 text-base md:text-lg space-y-2 pl-4">
            <li><span className="font-semibold text-green-400">30+ mentors</span> guiding students daily</li>
            <li>A well-equipped <span className="font-semibold text-green-400">library</span> for all learners</li>
            <li><span className="font-semibold text-green-400">Interactive reading rooms</span> to enhance focus</li>
            <li><span className="font-semibold text-green-400">Special classes</span> for JNV, CHS, and other competitive exams</li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-[40%]">
          <img
            src={AchivIll}
            alt="KOSHISH Achievements"
            className="w-full h-auto rounded-2xl bg-green-100 p-4 shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Achievement;
