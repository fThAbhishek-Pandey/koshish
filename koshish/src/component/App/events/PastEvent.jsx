import React,{ useEffect,useContext } from 'react'
import NoEvent from './NoEvent'
import ServerErr from '../../SeverErr'
import { AppContext } from '../../../context/App'
import EventCard from './EventCard'
import Loader from '../../Loader'
const PastEvent = () => {
  const {
    pastEvent,handlePastEvent,}= useContext(AppContext);
    useEffect(()=>{
      handlePastEvent()
    },[])
    console.log("pastEvent: ",pastEvent)
  return (
    <div className="sm:px-6 lg:px-8 py-8">
     <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue10 mb-6">
            Our Past Events
          </h2>
          <p className="text-md sm:text-xl font-sm text-gray-700 leading-relaxed">
          Our past events have been a great success, leaving behind incredible memories and valuable experiences. From workshops to competitions, we’ve brought together individuals who are passionate about growth and development.
          </p>
        </div> 
      
    {pastEvent != "5xx" ? (
      <div>
      { pastEvent == "NODATA"  ?<NoEvent />
      : <div className="mt-10 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
        { pastEvent.length ==0 ? <Loader />: pastEvent.map((event) => (
          <EventCard key={event._id} event={event} />
        ))}
      </div>}
      </div>
    ) : (
      <ServerErr />
    )}
  </div>
  
  )
}

export default PastEvent