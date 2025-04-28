import React, { useState,useContext,useEffect } from "react";
import IndexMentor from "./Mentor";
import IndexAlumni from "./alumni";
import Faculty from "./Visionary";
import ColabOrg from "./ColabOrg";
import SearchMember from "./SearchMember";
import { AppContext } from "../../../context/App";
const tabItems = [
  { id: 1, label: "Mentor" },
  { id: 2, label: "Alumni" },
  { id: 3, label: "Visionary" },
  { id: 4, label: "Collaborator" },
];

const IndexFamiliy = () => {
  const [tab, setTab] = useState(1);
  const {docuTitle, setDocuTitle,} = useContext(AppContext)
      useEffect(()=>{
          setDocuTitle('family-Koshish')
      },[docuTitle])
  return (
    <div className="bg-green-50 relative top-20 md:top-32 mb-32 px-4">
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 sm:gap-4 border-b border-gray-300">
        {tabItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setTab(item.id)}
            className={`cursor-pointer px-2 sm:px-4 py-2 text-base sm:text-lg font-medium transition-all ${
              tab === item.id
                ? "text-blue-600 border-b-2 border-blue-500"
                : "text-gray-500 hover:text-blue-600 hover:border-b-2 hover:border-blue-300"
            }`}
          >
            {item.label}
          </div>
        ))}
      </div>

      {/* Search Member Separate Button */}
      <div className="flex justify-start mt-4">
        {tab !== 0 && (
          <button
            onClick={() => setTab(0)}
            className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition text-sm sm:text-base"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1116.65 2.5a7.5 7.5 0 010 14.15z"
              />
            </svg>
            Search Member
          </button>
        )}
      </div>

      {/* Content */}
      <div className="mt-6">
        {tab === 0 && <SearchMember />}
        {tab === 1 && <IndexMentor />}
        {tab === 2 && <IndexAlumni />}
        {tab === 3 && <Faculty />}
        {tab === 4 && <ColabOrg />}
      </div>
    </div>
  );
};

export default IndexFamiliy;
