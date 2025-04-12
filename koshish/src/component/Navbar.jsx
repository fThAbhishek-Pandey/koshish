import React, { useState, useEffect } from 'react';
import koshishLogo from '../assets/koshishlogo.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Scroll hide/show navbar
  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed z-50 w-full transition-transform duration-300 bg-blue10 text-white shadow-md ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <img src={koshishLogo} alt="Koshish Logo" className="h-12 w-12 sm:h-14 sm:w-14" />
          <span className="text-3xl sm:text-4xl font-bold">Koshish</span>
        </NavLink>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 items-center text-lg">
          <NavLink to="/events" className="hover:text-green-400 transition">Events</NavLink>
          <NavLink to="/mentors" className="hover:text-green-400 transition">Mentors</NavLink>
          <NavLink to="/announcement" className="hover:text-green-400 transition">Announcement</NavLink>
          <NavLink to="/about" className="hover:text-green-400 transition">About Us</NavLink>
          <NavLink to="/contact" className="hover:text-green-400 transition">Contact Us</NavLink>
        </ul>

        {/* Desktop Button */}
        <div className="hidden md:flex">
          <button className="px-5 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
            Join Us
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-3xl text-white focus:outline-none"
          onClick={toggleMenu}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue10 px-6 py-4">
          <ul className="flex flex-col gap-4 text-lg">
            <NavLink to="/" onClick={() => setIsOpen(false)} className="hover:text-green-400">Home</NavLink>
            <NavLink to="/events" onClick={() => setIsOpen(false)} className="hover:text-green-400">Events</NavLink>
            <NavLink to="/mentors" onClick={() => setIsOpen(false)} className="hover:text-green-400">Mentors</NavLink>
            <NavLink to="/announcement" onClick={() => setIsOpen(false)} className="hover:text-green-400">Announcement</NavLink>
            <NavLink to="/about" onClick={() => setIsOpen(false)} className="hover:text-green-400">About Us</NavLink>
            <NavLink to="/contact" onClick={() => setIsOpen(false)} className="hover:text-green-400">Contact Us</NavLink>
            <button className="w-full mt-2 px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
              Join Us
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
