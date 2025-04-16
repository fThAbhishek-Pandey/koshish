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
    <div className="sm:px-6 lg:px-8">
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