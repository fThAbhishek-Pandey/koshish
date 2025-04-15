import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../../context/App';

const Memories = () => {
  const navigate = useNavigate();
  const { memories, handleMemories } = useContext(AppContext);

  useEffect(() => {
    handleMemories(); // Fetch data when component mounts
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Memories</h2>

      {memories?.length === 0 ? (
        <p>No memories found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {memories.map((item) => (
            <div
              key={item._id}
              className="border rounded-lg shadow hover:shadow-md transition cursor-pointer"
              onClick={() => navigate(`/gallery/${item._id}`)}
            >
              <img
                src={item.thumbnail}
                alt="thumbnail"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-3">
                <h3 className="text-lg font-semibold">{item.galleryTitle}</h3>
                <p className="text-sm text-gray-500">
                  {new Date(item.date).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Memories;
