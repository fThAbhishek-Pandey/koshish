import React from 'react'
import AchivIll from "./../../../assets/faci.svg"
const Achievement = () => {
  return (
    <div className="px-4 py-12 max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-blue10 text-center mb-4">What we have done</h2>
    <p className="max-w-5xl mx-auto text-center text-gray-800 mb-10">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam corporis et iste exercitationem perspiciatis maiores doloribus itaque pariatur. Dolorum laudantium quos quod quis earum porro quae consequatur sit voluptatem fugit.
    </p>
    <div className="flex flex-col md:flex-row justify-between items-center gap-10">
      <div className="text-left space-y-4">
        <h2 className='text-xl text-blue10 font-bold'>Our facilities</h2>
        <ul className="list-disc list-inside text-gray-700 text-lg">
          <li>30+ mentors mentored daily</li>
          <li>Library for students</li>
          <li>Interactive Reading room</li>
          <li>Special Classes for JNV/CHS and other corresponding exams</li>
        </ul>
      </div>
  
      <div className="w-full md:w-[40%]">
        <img
          src={AchivIll}
          className="w-full h-auto bg-green-100 rounded-lg shadow-md"
          alt="what we have done"
        />
      </div>
    </div>
  </div>
  
  )
}

export default Achievement