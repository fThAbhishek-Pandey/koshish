import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../context/App";
import MentorCard from "./MentorCard";
import ServerErr from "../../SeverErr";
import NoData from "../../NoData";
import Loader from "../../Loader";
import { useNavigate } from "react-router-dom";

const IndexAlumni = () => {
  const { allAlumni, handelgetAllAlumni } = useContext(AppContext);
  const [filteredAlumni, setFilteredAlumni] = useState([]);
  const [selectedYog, setSelectedYog] = useState("All");

  const navigate = useNavigate();

  useEffect(() => {
    handelgetAllAlumni();
  }, []);

  useEffect(() => {
    if (allAlumni && typeof allAlumni !== "string") {
      setFilteredAlumni(allAlumni);
    }
  }, [allAlumni]);

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setSelectedYog(value);

    if (value === "All") {
      setFilteredAlumni(allAlumni);
    } else {
      const filtered = allAlumni.filter((alumnus) => alumnus.yog == value);
      setFilteredAlumni(filtered);
    }
  };

  // Extract unique YOGs for dropdown
  const uniqueYogs = allAlumni && typeof allAlumni !== "string"
    ? Array.from(new Set(allAlumni.map((alumnus) => alumnus.yog))).sort((a, b) => b - a)
    : [];

  return (
    <div className="md:mb-32 py-6 sm:px-6 lg:px-8 mb-24 text-center">
      <div className="w-full px-4 py-12">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue10 mb-6">
            Meet Our Alumni
          </h2>
          <p className="text-md sm:text-xl font-sm text-gray-700 leading-relaxed mb-8">
            We deeply appreciate our alumni, whose vision and hard work laid the foundation of what KOSHISH is today.
            Their journey inspires us every day to strive harder and take KOSHISH to new heights.
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

      {/* Alumni Cards Section */}
      <div className="bg-green-50 p-5 rounded-lg shadow-md">
        {allAlumni && (
          <div className="">
            {allAlumni === "5xx" ? (
              <ServerErr />
            ) : (
              <div>
                {allAlumni === "NODATA" ? (
                  <NoData />
                ) : (
                  <div>
                    {filteredAlumni.length === 0 ? (
                      <Loader />
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
                        {filteredAlumni.map((item, idx) => (
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

export default IndexAlumni;
