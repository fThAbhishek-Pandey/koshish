import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../../context/App';
import AlbumCard from './AlbumCard';
const Memories = () => {
 
  const { memories, handleMemories } = useContext(AppContext);

  useEffect(() => {
    handleMemories(); // Fetch data when component mounts
  }, []);

  return (
    <div className="p-6">
     <div className="w-full px-4 py-12">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue10 mb-6">
          Koshish Memories
          </h2>
          <p className="text-md sm:text-xl font-sm text-gray-700 leading-relaxed">
          Every moment with KOSHISH is a memory worth preserving.
          This section captures the essence of our journey — a vibrant tapestry of events, efforts, and emotions that have shaped who we are today.
          </p>
        </div>
      </div>

      { memories && memories?.length === 0 ? (
        <p className="text-center text-gray-500 text-lg font-medium py-6">
        No memories found.
      </p>
      
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {memories.map((item) => (
             <AlbumCard item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Memories;
