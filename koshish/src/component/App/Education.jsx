import React from 'react'
import education from '../../assets/edu.svg'
import { LiaUserGraduateSolid } from "react-icons/lia";
import { LiaUniversitySolid } from "react-icons/lia";

const Education = () => {
  return (

   <div className="flex flex-col md:flex-row items-start">
    <div className="w-full md:w-1/2 flex items-center justify-center py-8 md:py-0">
        <img src={education} alt="" className="max-w-full h-auto" />
    </div>
    <div className="w-full md:w-1/2 flex flex-col items-start px-4 md:px-0">
        <div className="text-left py-10 w-full">
            <h1 className="text-4xl font-bold mb-5 p-2 ml-10">Education is life</h1>
            <p className="text-gray-500 mb-4 p-2 ml-10 mp-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maxime nam porro possimus fugiat quo molestiae illa.
            </p>
            <div className="flex flex-col items-start space-y-2 mb-2">
                <div className="text-2xl font-bold flex items-center ml-13 ">
                    <LiaUserGraduateSolid className="mr-2 rounded-full bg-violet-300" />
                    22,931 <span className="text-base font-normal m-2 ">Yearly Graduates</span>
                </div>
                <div className="text-2xl font-bold flex items-center p-1 ml-12">
                    <LiaUniversitySolid className="mr-2 rounded-full bg-violet-300" />
                    150 <span className="text-base font-normal m-2">Universities Worldwide</span>
                </div>
  
            </div>
            </div>
                      </div>
            </div>

  )
}

export default Education
