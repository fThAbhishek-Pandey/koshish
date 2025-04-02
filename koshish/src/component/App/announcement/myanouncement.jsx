import React, { useEffect } from 'react'
import Markdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../../context/App'
import { useContext } from 'react'
const Myanouncement = () => {
    const {myAnnouncement,handlemyAnnouncement} = useContext(AppContext );
    const {id} = useParams('id')
    useEffect(()=>{
      handlemyAnnouncement(id)
    },[])
    
    console.log("_id: ",id);
    
  return myAnnouncement && (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-xl border border-gray-200">
      <img 
        src={myAnnouncement.image} 
        alt={myAnnouncement.heading} 
        className="w-full h-60 object-cover rounded-lg shadow-md" 
      />
      <div className="mt-4">
        <h1 className="text-2xl font-bold text-gray-900">{myAnnouncement.heading}</h1>
        <div className="mt-2 text-gray-600 whitespace-pre-line">
        <Markdown >{myAnnouncement.announcement}</Markdown></div>
        <p className="mt-4 text-gray-500 text-sm">📅 Date: {new Date(myAnnouncement.date).toDateString()}</p>
        {myAnnouncement.isAtive && (
          <span className="inline-block bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded mt-3">
            Active
          </span>
        )}
      </div>
    </div>
  )
}

export default Myanouncement