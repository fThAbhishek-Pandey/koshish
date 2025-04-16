import React from 'react'
import { useNavigate } from 'react-router-dom';
const AlbumCard = ({item}) => {
    const navigate = useNavigate();
  return (
    <div
    key={item._id}
    className="bg-green-100 border rounded-lg shadow hover:shadow-md transition cursor-pointer"
    onClick={() => navigate(`/gallery/${item._id}`)}
  >
    <img
      src={item.thumbnail}
      alt="thumbnail"
      className="w-full h-48 object-cover rounded-t-lg"
    />
    <div className="p-3">
      <h3 className="text-lg text-blue10 font-semibold">{item.galleryTitle}</h3>
      <p className="text-md text-gray-900">
        {new Date(item.date).toLocaleDateString()}
      </p>
    </div>
  </div>
  )
}

export default AlbumCard