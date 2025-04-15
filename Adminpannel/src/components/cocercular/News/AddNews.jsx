import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { CocirculerContext } from "../../../context/cocirculer";
import { useContext } from "react";
const Announcement = () => {
  // State for managing announcement

  const { handelAnnouncement } = useContext(CocirculerContext);
  const [announcement, setAnnouncement] = useState("");
  const [date, setDate] = useState("");
  const [heading, setHeading] = useState("");
  const [image, setImage] = useState(false);
  const formdata = new FormData ();
  formdata.append('date',date);
  formdata.append('heading',heading);
  formdata.append('image',image);
  formdata.append('announcement',announcement);
  const handleSubmit = async (e) => {
    e.preventDefault();
    handelAnnouncement(formdata);
    formdata.forEach((key, val)=> console.log(key,"-> ", val));
    console.log("Announcement submitted:", formdata);
  };

  return (
    <div className="p-6 max-w-5xl mx-auto bg-white shadow-lg rounded-lg">
    <div>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Date & Thumbnail - Flex Container */}
        <div className="flex flex-col md:flex-row md:gap-6">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">
              Date
            </label>
            <input
              type="date"
              value={date}
              onChange={(e)=>setDate(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">
              Announcement Thumbnail
            </label>
            <input
              type="file"
              onChange={(e)=>setImage(e.target.files[0])}
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm"
            />
          </div>
        </div>

        {/* Heading Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Heading

          </label>
          <input
            type="text"
            value={heading}
            onChange={(e)=> setHeading(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Announcement & Markdown Preview - Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Announcement
            </label>
            <textarea
              className="w-full mt-1 block p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              value={announcement}
              onChange={(e) => setAnnouncement(e.target.value)}
              rows="8"
            />
          </div>
          <div>
            <div className="text-sm font-medium text-gray-700 mb-1">
              Markdown Preview
            </div>
            <div className="bg-green-100 border-l-4 border-green-500 p-4 rounded-lg h-full overflow-auto">
              <ReactMarkdown remarkPlugins={[remarkGfm]} >{announcement}</ReactMarkdown>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition font-medium shadow"
          >
            Add Announcement
          </button>
        </div>
      </form>
    </div>
  </div>
  );
};

export default Announcement;
