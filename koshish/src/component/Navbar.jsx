import React, { useState } from 'react';
import koshishLogo from '../assets/koshishlogo.png'
import {NavLink} from 'react-router-dom'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-sm">
      {/* Logo Section */}
      <NavLink to={'/'}>
      <div className="flex  h-auto items-center gap-2">
        <img 
          src={koshishLogo}
          alt="koshish Logo" 
          className="h-16 w-16"
        />
        <span className="text-xl font-bold text-gray-800">Koshish</span>
      </div>
        
      </NavLink>
     

      {/* Navigation Links - Hidden on mobile */}
      <ul className={`md:flex gap-8 items-center hidden`}>
        <NavLink to={'/events'}><li className="text-gray-700 hover:text-indigo-600 transition-colors">Events</li></NavLink>
        <NavLink to={'/mentors'}><li className="text-gray-700 hover:text-indigo-600 transition-colors">Mentor</li></NavLink>
        <NavLink to={'/announcement'}><li className="text-gray-700 hover:text-indigo-600 transition-colors">Announcement</li></NavLink>
        <NavLink to={'/about'}><li className="text-gray-700 hover:text-indigo-600 transition-colors">About us</li></NavLink>
        <NavLink to={'/contact'}><li className="text-gray-700 hover:text-indigo-600 transition-colors">Contact us</li></NavLink>
      </ul>

      {/* Auth Buttons - Hidden on mobile */}
      <div className="hidden md:flex gap-4">
        <button className="px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors">
          Join us
        </button>
        {/* <button className="px-6 py-2 border border-indigo-600 text-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors">
          Log In
        </button> */}
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-gray-700 text-2xl"
        onClick={toggleMenu}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-16 left-0 right-0 bg-white shadow-md md:hidden">
          <ul className="flex flex-col p-4">
            <li className="py-2">
              <a href="#home" className="text-gray-700 hover:text-indigo-600 transition-colors">Events</a>
            </li>
            <li className="py-2">
              <a href="#courses" className="text-gray-700 hover:text-indigo-600 transition-colors">Mentors</a>
            </li>
            <li className="py-2">
              <a href="#about" className="text-gray-700 hover:text-indigo-600 transition-colors">Announcement</a>
            </li>
            <li className="py-2">
              <a href="#blog" className="text-gray-700 hover:text-indigo-600 transition-colors">About us</a>
            </li>
            <li className="py-2">
              <a href="#contact" className="text-gray-700 hover:text-indigo-600 transition-colors">Contact us</a>
            </li>
            <li className="py-2">
              <button className="w-full px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors">
                Join us
              </button>
            </li>
            {/* <li className="py-2">
              <button className="w-full px-6 py-2 border border-indigo-600 text-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors">
                Log In
              </button>
            </li> */}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;