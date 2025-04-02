import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../../../context/App';
import Markdown from 'react-markdown';
const Myevent = () => {
  const { id } = useParams();
  const { idEvent, handleIDEvent } = useContext(AppContext);

  useEffect(() => {
    handleIDEvent(id);
  }, [id]);

  if (!idEvent) {
    return (
      <div className="flex items-center justify-center relative top-20 md:top-32 mb-32">
        <p className="text-gray-600 text-lg">Loading event details...</p>
      </div>
    );
  }

  return (
    <div className=" flex flex-col items-center justify-center bg-gray-100 p-4 relative top-20 md:top-32 mb-32">
      <div className="max-w-5xl bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 p-6">
        <img 
          src={idEvent.thumbnail} 
          alt={idEvent.name} 
          className="w-full  object-cover rounded-lg shadow-md" 
        />
        <div className="mt-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900">{idEvent.name}</h2>
          <p className="mt-2 text-gray-600"><Markdown>{idEvent.desc}</Markdown> </p>
          <p className="mt-2 text-gray-500 text-sm">📅 Date: {new Date(idEvent.date).toDateString()}</p>
          {idEvent.isActive && (
            <span className="inline-block bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded mt-3">
              Active
            </span>
          )}
          {idEvent.isTop && (
            <span className="ml-2 inline-block bg-yellow-500 text-white text-xs font-semibold px-3 py-1 rounded mt-3">
              Top Event
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Myevent;