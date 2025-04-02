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
    <div className='relative top-32 mb-32'>
      {
         pastEvent &&  pastEvent.length !=0?<div className="min-h-screen bg-gray-100 p-6 flex flex-wrap gap-6 justify-center">
         {pastEvent.map((event) => (
           <EventCard key={event._id} event={event} />
         ))}
       </div> :<NoEvent/>
      } 
    </div>
  )
}

export default PastEvent