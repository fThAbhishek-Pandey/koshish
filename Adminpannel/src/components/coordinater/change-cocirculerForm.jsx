import React, { useContext, useState } from "react";
import { CoordinatorContext } from "../../context/coordinater";

const ChangeCocirculerForm = () => {
  const { hadleChangeCocirculer } = useContext(CoordinatorContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    speciality: "",
    customSpeciality: "",
    about: "",
    address: "",
  });

  const [showCustomSpeciality, setShowCustomSpeciality] = useState(false);

  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (e.target.name === "speciality") {
      if (e.target.value === "Other") {
        setShowCustomSpeciality(true);
      } else {
        setShowCustomSpeciality(false);
        setFormData({ ...formData, speciality: e.target.value, customSpeciality: "" });
      }
    }
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const finalData = { ...formData };
      if (showCustomSpeciality) {
        finalData.speciality = formData.customSpeciality;
      }
      delete finalData.customSpeciality; 

      console.log("Updated Data:", finalData);
      hadleChangeCocirculer(finalData);
      alert("Profile updated successfully!");
    } catch (error) {
      console.log("Error updating:", error);
    }
  };

  return (
    <div className="p-4 w-1/3 mx-auto border rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Add Teacher</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div>
          <h3>Name</h3>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border rounded px-3 py-2 border-blue-500 w-full"
            placeholder="Abhishek"
            required
          />
        </div>
        <div>
          <h3>Email</h3>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border rounded px-3 py-2 border-blue-500 w-full"
            placeholder="abhishek@gamil.com"
            required
          />
        </div>
        <div>
          <h3>Password</h3>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="border rounded px-3 py-2 border-blue-500 w-full"
            placeholder="A2k2024"
            required
          />
        </div>
        <div>
          <h3>Speciality</h3>
          <select
            name="speciality"
            value={formData.speciality}
            onChange={handleChange}
            className="border rounded px-3 py-2 border-blue-500 w-full"
            required
          >
            <option value="">Select Speciality</option>
            <option value="B.Tech">B.Tech</option>
            <option value="M.Tech">M.Tech</option>
            <option value="MBA">MBA</option>
            <option value="PhD">PhD</option>
            <option value="Other">Other</option>
          </select>
        </div>

        
        {showCustomSpeciality && (
          <div>
            <h3>Enter Speciality</h3>
            <input
              type="text"
              name="customSpeciality"
              value={formData.customSpeciality}
              onChange={handleChange}
              className="border rounded px-3 py-2 border-blue-500 w-full"
              placeholder="Enter your speciality"
              required
            />
          </div>
        )}

        <div>
          <h3>About</h3>
          <input
            type="text"
            name="about"
            value={formData.about}
            onChange={handleChange}
            className="border rounded px-3 py-2 border-blue-500 w-full"
            placeholder="about"
            required
          />
        </div>
        <div>
          <h3>Address</h3>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="border rounded px-3 py-2 border-blue-500 w-full"
            placeholder="my address"
            required
          />
        </div>
        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Change Cocirculer
        </button>
      </form>
    </div>
  );
};

export default ChangeCocirculerForm;