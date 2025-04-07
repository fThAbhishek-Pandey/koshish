import React from 'react'
import NoEvent from './NoEvent'
import { useEffect,useContext } from 'react'
import { AppContext } from '../../../context/App'
import EventCard from './EventCard'
const PastEvent = () => {
  const {
    pastEvent,handlePastEvent,}= useContext(AppContext);
    useEffect(()=>{
      handlePastEvent()
    },[])
    console.log("pastEvent: ",pastEvent)
  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
    {pastEvent && pastEvent.length !== 0 ? (
      <div className="min-h-screen bg-gray-100 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
        {pastEvent.map((event) => (
          <EventCard key={event._id} event={event} />
        ))}
      </div>
    ) : (
      <NoEvent />
    )}
  </div>
  
  )
}

export default PastEvent