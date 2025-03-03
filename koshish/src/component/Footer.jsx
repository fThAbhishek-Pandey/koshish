import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (

   <footer className="bg-gray-100 py-10">
      <div className="container mx-auto px-6 md:px-12">
        
  
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">
          
       
          <div className="text-gray-700 text-lg font-semibold text-center md:text-left">
            <p>Please feel free to get in touch with us</p>
          </div>

     
          <div className="flex flex-col items-center md:items-start text-gray-600 text-sm">
            <div className="flex items-center gap-2">
              <CiLocationOn className="text-xl text-gray-700" />
              <p className="text-black font-semibold">Our Location</p>
            </div>
            <p className="text-center md:text-left">
              401 Broadway, 24th Floor, Orchard Cloud View, London
            </p>
          </div>

      
          <div className="flex flex-col items-center md:items-start text-gray-700 text-sm">
            <div className="flex items-center gap-2">
              <CiMail className="text-xl text-gray-700" />
              <p className="font-medium">How Can We Help?</p>
            </div>
            <p>info@yourdomain.com</p>
            <p>contact@yourdomain.com</p>
          </div>
        </div>

    
        <div className="mt-6 border-t pt-6 text-gray-500 text-sm flex flex-col items-center space-y-4">
          {/* TailGrids Logo */}
          <img src="/tailgrids-logo.png" alt="TailGrids" className="h-6" />

          {/* Copyright */}
          <p>&copy; 2025 TailGrids | All Rights Reserved</p>

        
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-700">
              <FaFacebookF className="text-lg" />
            </a>
            <a href="#" className="hover:text-gray-700">
              <FaTwitter className="text-lg" />
            </a>
            <a href="#" className="hover:text-gray-700">
              <FaLinkedin className="text-lg" />
            </a>
            <a href="#" className="hover:text-gray-700">
              <FaInstagram className="text-lg" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer