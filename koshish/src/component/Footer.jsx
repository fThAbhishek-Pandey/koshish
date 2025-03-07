import React from 'react';
import { FaYoutube, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full bg-[#8fcaeaa1] flex flex-col md:flex-row justify-between items-center p-6 text-black'>
      <div className='w-full md:w-[30%] p-4 rounded-lg text-center md:text-left'>
        <div className='flex flex-col items-center md:items-start'>
          <img src='' alt='Logo' className='w-20 h-20 rounded-full' />
          <h1 className='text-3xl font-bold mt-2'>Koshish</h1>
          <h3 className='text-lg mt-2'>One step towards education..</h3>
        </div>
        <div className='mt-4'>
          <p className='text-lg text-center md:text-left'>Follow us on:</p>
          <div className='flex justify-center md:justify-start items-center gap-4 mt-2'>
            <a href="#" className='text-4xl transition-all duration-300 hover:text-[#FF0000]'> <FaYoutube/></a>
            <a href="#" className='text-4xl transition-all duration-300 hover:text-[#0077B5]'> <FaLinkedin/></a>
            <a href="#" className='text-4xl transition-all duration-300 hover:text-[#1877F2]'> <FaFacebook /></a>
            <a href="#" className='text-4xl transition-all duration-300 hover:text-[#C13584]'> <FaInstagram/></a>
          </div>
        </div>
      </div>

      <div className='w-full md:w-[60%] flex flex-col md:flex-row justify-evenly items-center p-4 mt-4 md:mt-0'>
        <div className='w-full md:w-[40%] text-center md:text-left mb-6 md:mb-0'>
          <h2 className='text-2xl font-bold'>Contact Us</h2>
          <p className='text-md mt-2'>
            <span>Mon-Sat: 5:00pm to 6:00pm</span><br/>
            <span>Mob No.: +91 xxxxxxxxxx</span><br/>
            <span>Email: team@koshish.edu</span>
          </p>
          <h2 className='text-2xl font-bold mt-4'>Our Location</h2>
          <p className='text-md'>Rajkiya Engineering College, Ambedkar Nagar, Uttar Pradesh - 224122</p>
        </div>

        <div className='w-full md:w-[50%]'>
          <h1 className='text-3xl text-center font-semibold mb-4'>Important Links</h1>
          <div className='grid grid-cols-2 gap-4 text-center md:text-left'>
            <ul className='space-y-2 text-lg'>
              <li className='transition-all duration-300 cursor-pointer hover:underline hover:font-semibold'>Home</li>
              <li className='transition-all duration-300 cursor-pointer hover:underline hover:font-semibold'>About us</li>
              <li className='transition-all duration-300 cursor-pointer hover:underline hover:font-semibold'>Contact us</li>
              <li className='transition-all duration-300 cursor-pointer hover:underline hover:font-semibold'>Events</li>
              <li className='transition-all duration-300 cursor-pointer hover:underline hover:font-semibold'>Upcoming Events</li>
            </ul>
            <ul className='space-y-2 text-lg'>
              <li className='transition-all duration-300 cursor-pointer hover:underline hover:font-semibold'>Achievements</li>
              <li className='transition-all duration-300 cursor-pointer hover:underline hover:font-semibold'>Testimonials</li>
              <li className='transition-all duration-300 cursor-pointer hover:underline hover:font-semibold'>Cultural</li>
              <li className='transition-all duration-300 cursor-pointer hover:underline hover:font-semibold'>Teachers</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;