// import React from 'react';
import { FaHome, FaUserPlus, FaUserMinus,FaUserEdit } from 'react-icons/fa';

const SidebarCocirculer = () => {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white flex flex-col items-center py-4">
      <div className="text-2xl mb-8">SidebarCocirculer</div>
      <ul className="w-full">
        <li className="w-full py-3 flex items-center px-4 hover:bg-gray-700 cursor-pointer">
            <FaHome className="mr-3" />
            <span>Dashboard</span>
        </li>
        <li className="w-full py-3 flex items-center px-4 hover:bg-gray-700 cursor-pointer">
          <FaUserPlus className="mr-3" />
          <span>Mentor</span>
        </li>
        <li className="w-full py-3 flex items-center px-4 hover:bg-gray-700 cursor-pointer">
          <FaUserMinus className="mr-3" />
          <span>Land Page</span>
        </li>
        <li className="w-full py-3 flex items-center px-4 hover:bg-gray-700 cursor-pointer">
          <FaUserEdit className="mr-3" />
          <span>Announcement</span>
        </li>
        <li className="w-full py-3 flex items-center px-4 hover:bg-gray-700 cursor-pointer">
          <FaUserEdit className="mr-3" />
          <span>contact</span>
        </li>
      </ul>
    </div>

  )
}

export default SidebarCocirculer