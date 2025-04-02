import React from 'react'
import NoEvent from './NoEvent'
import { useEffect,useContext } from 'react'
import { AppContext } from '../../../context/App'
import EventCard from './EventCard'
const NewEvent = () => {
  const {newEvent,handleNewEvent}= useContext(AppContext);
    useEffect(()=>{
      handleNewEvent()
    },[])
    console.log("newEvent: ",newEvent)
  return (
    <div className='relative top-32'>
      {newEvent && newEvent.length !=0 ?  <div className="min-h-screen bg-gray-100 p-6 flex flex-wrap gap-6 justify-center">
      {newEvent.map((event) => (
        <EventCard key={event._id} event={event} />
      ))}
    </div> :<NoEvent/>}
      
      </div>
  )
}

export default NewEvent