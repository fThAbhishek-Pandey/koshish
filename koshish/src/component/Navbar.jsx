import React, { useState } from 'react';
import koshishLogo from '../assets/koshishlogo.png'
import {NavLink} from 'react-router-dom'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav  className='fixed bg-blue10 z-50 text-white w-full'>
       <div  className="flex justify-between items-center px-8 py-4  shadow-sm">
      {/* Logo Section */}
      <NavLink to={'/'}>
      <div className="hidden md:flex  h-auto items-center gap-2">
        <img 
          src={koshishLogo}
          alt="koshish Logo" 
          className="h-16 w-16"
        />
        <span className="text-5xl font-bold ">Koshish</span>
      </div>
        
      </NavLink>
     

      {/* Navigation Links - Hidden on mobile */}
      <ul className={`md:flex gap-8 items-center hidden`}>
        <NavLink to={'/events'}><li className=" hover:text-indigo-600 transition-colors">Events</li></NavLink>
        <NavLink to={'/mentors'}><li className=" hover:text-indigo-600 transition-colors">Mentor</li></NavLink>
        <NavLink to={'/announcement'}><li className=" hover:text-indigo-600 transition-colors">Announcement</li></NavLink>
        <NavLink to={'/about'}><li className=" hover:text-indigo-600 transition-colors">About us</li></NavLink>
        <NavLink to={'/contact'}><li className=" hover:text-indigo-600 transition-colors">Contact us</li></NavLink>
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
      <div className='bg-blue10 md:hidden w-full'></div>
      <button 
        className="fixed bg-blue10 text-white top-0 z-50  right-5 md:hidden  text-2xl"
        onClick={toggleMenu}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-5 left-0 right-0 z-40 bg-blue10 text-white shadow-md md:hidden">
          <ul className="flex flex-col p-4">
          <NavLink to={'/'} className="py-2">
              <li  className=" hover:text-indigo-600 transition-colors">Home</li>
            </NavLink>
            <NavLink to={'/events'} className="py-2">
              <li  className=" hover:text-indigo-600 transition-colors">Events</li>
            </NavLink>
            <NavLink to={'/mentors'} className="py-2  hover:text-indigo-600 transition-colors">
              Mentors
              </NavLink>
            <NavLink to={'/announcement'} className="py-2  hover:text-indigo-600 transition-colors">
            Announcement
            </NavLink>
            <NavLink to={'/about'} className="py-2 t hover:text-indigo-600 transition-colors">
            About us
            </NavLink>
            <NavLink to={'/contact'} className="py-2  hover:text-indigo-600 transition-colors">
            Contact us
            </NavLink>
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
      </div>
    </nav>
  );
};

export default Navbar;