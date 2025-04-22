import React, { useContext, useEffect, useState } from "react";
import { CocirculerContext } from "../../../context/cocirculer";
import { useParams, useNavigate } from "react-router-dom";
import Preview from "../../App/MarkdownEditor/preview";
import Editor from "../../App/MarkdownEditor/Editor";
const UpdateNewsById = () => {
  const { newsById, handelgetNewsById, handelUpdateNews } =
    useContext(CocirculerContext);
  const navigator = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    handelgetNewsById(id);
  }, [id ]);
  const [announcement, setAnnouncement] = useState(newsById.announcement);
  const [date, setDate] = useState(newsById.date);
  const [heading, setHeading] = useState(newsById.heading);
  const [image, setImage] = useState(false);
useEffect(()=>{
  setAnnouncement(newsById.announcement);
  setDate(newsById.date);
  setHeading(newsById.heading);
},[id])
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("date", date);
    formdata.append("heading", heading);
    formdata.append("image", image);
    formdata.append("imgurl", newsById.image);
    formdata.append("announcement", announcement);

    handelUpdateNews(id, formdata);
  };
  console.log("this is news by id", newsById);

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
                onChange={(e) => setDate(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">
                News Thumbnail
              </label>
              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
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
              onChange={(e) => setHeading(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          {/* Announcement & Markdown Preview - Grid Layout */}
          <div>
           <h2> Announcement</h2>
          <div className="min-h-screen bg-gray-100 dark:bg-gray-950 p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <Editor  markdown = {announcement} setMarkdown = {setAnnouncement}/>
              <Preview  markdown = {announcement} />
            </div>
          </div>
          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition font-medium shadow"
            >
              Update News
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateNewsById;
