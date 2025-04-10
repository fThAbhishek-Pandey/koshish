import React, { useState,useContext,useEffect } from 'react'
import { CocirculerContext } from '../../../context/cocirculer';
import {useNavigate } from 'react-router-dom'
const AllMentor = () => {
  const {getMentor ,handelgetMentor} = useContext(CocirculerContext)
     const navigator = useNavigate()
        useEffect(()=>{
  
          handelgetMentor();
  
        },[])
  return getMentor ? (
    <div className="p-6 space-y-4">
      <h2 className="text-2xl font-semibold mb-4">All Mentors</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {getMentor.map((mentor) => (
          <div
            key={mentor._id}
            className="p-4 border border-gray-200 rounded-xl shadow hover:shadow-lg transition duration-300"
          >
            <h3 className="text-lg font-medium">{mentor.name}</h3>
            <button
              onClick={() => navigator(`/mentor/${mentor._id}`)}
              className="mt-2 px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Update
            </button>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div className="p-6 text-center">Loading mentors...</div>
  );
}

export default AllMentor
