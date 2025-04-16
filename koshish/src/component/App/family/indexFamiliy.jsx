import React from 'react'
import { useState } from 'react'
import IndexMentor from './Mentor'
import IndexAlumni from './alumni'
import Faculty from './Visionary'
import ColabOrg from './ColabOrg'
const IndexFamiliy = () => {
    const [tab, setTab] = useState(0)
  return (
    <div className='bg-green-50 relative top-20 md:top-32 mb-32'>
<div className="flex space-x-4 border-b border-gray-300">
        <div
          onClick={() =>setTab(0)}
          className={`cursor-pointer px-4 py-2 text-lg font-medium  ${tab==0 ? "text-blue-600 ":"text-gray-500" } hover:text-blue-600 border-b-2 border-transparent hover:border-blue-500 transition`}
        >
          Mentor
        </div>
        <div
          onClick={() => setTab(1)}
          className={`cursor-pointer px-4 py-2 text-lg font-medium  ${tab==1 ? "text-blue-600 ":"text-gray-500" } hover:text-blue-600 border-b-2 border-transparent hover:border-blue-500 transition`}
        >
          Alumni
        </div>
        <div
          onClick={() => setTab(2)}
          className={`cursor-pointer px-4 py-2 text-lg font-medium  ${tab==2 ? "text-blue-600 ":"text-gray-500" } hover:text-blue-600 border-b-2 border-transparent hover:border-blue-500 transition`}
        >
          Visionary
        </div>
        <div
          onClick={() => setTab(3)}
          className={`cursor-pointer px-4 py-2 text-lg font-medium  ${tab==3 ? "text-blue-600 ":"text-gray-500" } hover:text-blue-600 border-b-2 border-transparent hover:border-blue-500 transition`}
        >
          Collaborator
        </div>
      </div>
        {tab == 0 && (<IndexMentor/>)}
        {tab == 1 && (<IndexAlumni/>)}
        {tab == 2 && (<Faculty/>)}
        {tab == 3 && (<ColabOrg/>)}

    </div>
  )
}

export default IndexFamiliy