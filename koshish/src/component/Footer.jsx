import React, { useState } from "react";
import { FaYoutube, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Logo from "../assets/koshishlogo.png";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const mapStyles = {
    height: "400px",
    width: "100%",
  };
  const defaultCenter = {
    lat: latitude,
    lng: longitude,
  };

  return (
    <div className="w-full bg-blue10 text-white flex flex-col md:flex-row justify-between items-center p-6">
      <div className="w-full md:w-[30%] p-4 rounded-lg text-center md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <img src={Logo} alt="Logo" className="w-20 h-20 rounded-full" />
          <h1 className="text-3xl font-bold mt-2">Koshish</h1>
          <h3 className="text-lg mt-2">A Welfare And Educational Socity</h3>
        </div>
        <div className="mt-4">
          <p className="text-lg text-center md:text-left">Follow us on:</p>
          <div className="flex justify-center md:justify-start items-center gap-4 mt-2">
            <a
              href="#"
              className="text-4xl transition-all duration-300 hover:text-[#FF0000]"
            >
              {" "}
              <FaYoutube />
            </a>
            <a
              href="https://www.linkedin.com/company/koshish-institute-of-education"
              className="text-4xl transition-all duration-300 hover:text-[#0077B5]"
            >
              {" "}
              <FaLinkedin />
            </a>
            {/* <a href="#" className='text-4xl transition-all duration-300 hover:text-[#1877F2]'> <FaFacebook /></a> */}
            <a
              href="#"
              className="text-4xl transition-all duration-300 hover:text-[#C13584]"
            >
              {" "}
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="w-full md:w-[60%] flex flex-col md:flex-row justify-evenly items-center p-4 mt-4 md:mt-0">
        <div className="w-full md:w-[40%] text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-2xl font-bold">Contact Us</h2>
          <p className="text-md mt-2">
            {/* <span>Mon-Sat: 5:00pm to 6:00pm</span><br/> */}
            {/* <span>Mob No.: +91 </span><br/> */}
            <span>Email: koshish.edu@gmail.com</span>
          </p>
          <h2 className="text-2xl font-bold mt-4">Our Location</h2>

          <p className="text-md">
            Rajkiya Engineering College, Ambedkar Nagar, Uttar Pradesh - 224122
          </p>
          <LoadScript googleMapsApiKey="YOUR_API_KEY">
            <GoogleMap
              mapContainerStyle={mapStyles}
              zoom={15}
              center={defaultCenter}
            >
              <Marker position={{ lat: latitude, lng: longitude }} />
            </GoogleMap>
          </LoadScript>
        </div>

        <div className="w-full md:w-[50%]">
          <h1 className="text-3xl text-center font-semibold mb-4">
            Important Links
          </h1>
          <div className="grid grid-cols-2 gap-4 text-center md:text-left">
            <ul className="space-y-2 text-lg">
              <li
                className="transition-all duration-300 cursor-pointer hover:underline hover:font-semibold"
                onClick={() => navigate("/")}
              >
                Home
              </li>
              <li
                className="transition-all duration-300 cursor-pointer hover:underline hover:font-semibold"
                onClick={() => navigate("/about")}
              >
                About us
              </li>
              <li
                className="transition-all duration-300 cursor-pointer hover:underline hover:font-semibold"
                onClick={() => navigate("/contact")}
              >
                Contact us
              </li>
              <li
                className="transition-all duration-300 cursor-pointer hover:underline hover:font-semibold"
                onClick={() => navigate("/privacy-and-policy")}
              >
                Privacy And Policy
              </li>
            </ul>
            <ul className="space-y-2 text-lg">
              <li
                className="transition-all duration-300 cursor-pointer hover:underline hover:font-semibold"
                onClick={() => navigate("/events")}
              >
                Events
              </li>
              <li
                className="transition-all duration-300 cursor-pointer hover:underline hover:font-semibold"
                onClick={() => navigate("/family")}
              >
                Family
              </li>

              <li
                className="transition-all duration-300 cursor-pointer hover:underline hover:font-semibold"
                onClick={() => navigate("/announcement")}
              >
                News
              </li>
              <li
                className="transition-all duration-300 cursor-pointer hover:underline hover:font-semibold"
                onClick={() => navigate("/gallery")}
              >
                Gallery
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
