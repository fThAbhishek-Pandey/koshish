import React, { useContext, useState } from "react";
import { AppContext } from "../../../context/App";
import MentorCard from "./MentorCard";
const SearchMember = () => {
  const { searchMember, handelSearchMember } = useContext(AppContext);
  const [name, setName] = useState("");

  // Handle the search input change
  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  // Handle the search button click
  const handleSearchClick = () => {
    if (name.trim()) {
      handelSearchMember(name); // Assuming this function will search for the member
    }
  };

  return (
    <div className="py-6 sm:px-6 lg:px-8 mb-24">
      <div className="w-full px-4 py-12">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue10 mb-6">
            Search Member
          </h2>
          <p className="text-md sm:text-xl font-sm text-gray-700 leading-relaxed mb-8">
            You can search for a member by name. Enter the name below to find the member you're looking for.
          </p>
        </div>
      </div>

      <div className="w-full max-w-md mx-auto">
        {/* Search input field */}
        <input
          type="text"
          value={name}
          onChange={handleInputChange}
          placeholder="Enter member name"
          className="w-full px-4 py-2 border border-blue-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-700 font-medium"
        />

        {/* Search button */}
        <button
          onClick={handleSearchClick}
          className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Search
        </button>
      </div>

      {/* Search Results */}
      <div className="mt-6">
        {searchMember && searchMember.length !== 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
            {searchMember.map((member, idx) => (
               <MentorCard item={member} key={idx} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-6">
            No members found with the name "{name}".
          </p>
        )}
      </div>
    </div>
  );
};

export default SearchMember;
