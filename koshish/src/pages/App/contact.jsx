
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/App";

const Contact = () => {
  const {docuTitle, setDocuTitle, handleContactus } = useContext(AppContext);
  useEffect(()=>{
    setDocuTitle("Contact-Koshish")
  },[docuTitle])
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [heading, setHeading] = useState("");
  const [para, setPara] = useState("");

  const data = {
    name,
    email,
    location,
    heading,
    para,
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    handleContactus(data);
  };

  return (

    <div className="max-w-lg mx-auto bg-green-100 p-8 rounded-4xl mb-42 relative top-20 md:top-36">
      <h2 className="text-3xl font-mono text-center mb-6">Contact Us</h2>
      <form onSubmit={onSubmitHandler} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            required
            className="w-full p-2 border bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue00"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="w-full p-2 border bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue00"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Location</label>
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            type="text"
            className="w-full p-2 border  bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue00"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Heading</label>
          <input
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
            type="text"
            className="w-full p-2 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue00"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Message</label>
          <textarea
            value={para}
            onChange={(e) => setPara(e.target.value)}
            rows="4"
            className="w-full p-2 border bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue00"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition"
        >
          Contact Us
        </button>
      </form>
    </div>
  );
};

export default Contact;