import React, {useContext} from 'react'
import NoAnouncement from './NoAnouncement'
import { useEffect } from 'react'
import { AppContext } from '../../../context/App'
const NewAnouncement = () => {
  const {newAnnouncement,handleNewAnnouncement}= useContext(AppContext);
  useEffect(()=>{
    handleNewAnnouncement()
  },[])
  return (
    <div>
       { newAnnouncement ? <div>
          {
           newAnnouncement && newAnnouncement.map ((announcement , idx)=>{
              return (
                <div key={announcement._id}>
                  <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-5 border border-gray-200">
      <img
        className="w-full h-48 object-cover rounded-lg"
        src={announcement.image}
        alt="Announcement"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-900">{announcement.heading}</h2>
        <p className="mt-2 text-gray-700">{announcement.announcement}</p>
        <p className="mt-2 text-gray-500 text-sm">
          Date: {new Date(announcement.date).toDateString()}
        </p>
        {announcement.isAtive && (
          <span className="inline-block bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded mt-3">
            Active
          </span>
        )}
      </div>
    </div>
                </div>
              )
            })
          }
       </div> : <NoAnouncement/>}
    </div>
  )
}

export default NewAnouncement