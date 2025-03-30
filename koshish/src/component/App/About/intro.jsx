import React from "react";

const Intro = () => {
  return (
    <div className="bg-gray-50 p-6 rounded-xl shadow-md max-w-5xl mb-36 mx-auto border-l-4 border-blue-500 relative top-20 md:top-32">
  <h2 className="text-3xl font-bold text-gray-800 mb-4">ABOUT US</h2>
  <p className="text-gray-700 text-lg leading-relaxed mb-4">
    True to its Hindi literal meaning, 
    <span className="font-semibold text-blue-700"> KOSHISH</span>, a social initiative of REC Ambedkar Nagar students, is primarily focused on providing education to the marginalized section of society, at least up to the level where they too can dream big.
  </p>
  <p className="text-gray-700 text-lg leading-relaxed">
    At <span className="font-semibold text-green-700">KOSHISH</span>, we strive to inspire students to dream and empower them to achieve their aspirations through education, with the belief that 
    <span className="italic text-blue-600"> "a simple effort can fill colors in many lives."</span>
  </p>
</div>

  );
};

export default Intro;
