import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../context/App";
import MentorCard from "./MentorCard";
import ServerErr from "../../SeverErr";
import NoData from "../../NoData";
import Loader from "../../Loader";
import { useNavigate } from "react-router-dom";

const IndexMentor = () => {
  const { allMentor, handelgetAllMentor } = useContext(AppContext);
  const [filteredMentors, setFilteredMentors] = useState([]);
  const [selectedYog, setSelectedYog] = useState("All");

  const navigate = useNavigate();

  useEffect(() => {
    handelgetAllMentor();
  }, []);

  useEffect(() => {
    if (allMentor && typeof allMentor !== "string") {
      setFilteredMentors(allMentor);
    }
  }, [allMentor]);

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setSelectedYog(value);

    if (value === "All") {
      setFilteredMentors(allMentor);
    } else {
      const filtered = allMentor.filter((mentor) => mentor.yog == value);
      setFilteredMentors(filtered);
    }
  };

  // Extract unique YOGs for dropdown
  const uniqueYogs = allMentor && typeof allMentor !== "string"
    ? Array.from(new Set(allMentor.map((mentor) => mentor.yog))).sort((a, b) => b - a)
    : [];

  return (
    <div className="md:mb-32 py-1 sm:px-6 lg:px-8 mb-24">
      <div className="w-full px-4 py-12">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue10 mb-6">
            Meet Our Mentors
          </h2>
          <p className="text-md sm:text-xl font-sm text-gray-700 leading-relaxed mb-8">
            Our mentors are the backbone of Koshish, actively contributing their time, skills, and passion to uplift underprivileged students.
            Through consistent efforts and dedication, they guide, teach, and inspire children to dream big and achieve more. Their hard work plays a crucial role in shaping a better future for the students and the community.
          </p>
          {/* Yog Filter Dropdown */}
          {uniqueYogs.length > 0 && (
            <div className="flex justify-start mb-8">
              <select
                value={selectedYog}
                onChange={handleFilterChange}
                className="px-4 py-2 rounded-lg border border-blue-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-700 font-medium"
              >
                <option value="All">All Years</option>
                {uniqueYogs.map((yog) => (
                  <option key={yog} value={yog}>
                    {yog - 4} - {yog}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      </div>

      {/* Mentors Cards Section */}
      <div className="p-5 rounded-lg shadow-md">
        {allMentor && (
          <div className="">
            {allMentor === "5xx" ? (
              <ServerErr />
            ) : (
              <div>
                {allMentor === "NODATA" ? (
                  <NoData />
                ) : (
                  <div>
                    {filteredMentors.length === 0 ? (
                      <Loader />
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
                        {filteredMentors.map((item, idx) => (
                          <MentorCard item={item} key={idx} />
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default IndexMentor;
