import React from 'react'
import NoEvent from './NoEvent'
import { useEffect,useContext } from 'react'
import { AppContext } from '../../../context/App'
const NewEvent = () => {
  const {newEvent,handleNewEvent}= useContext(AppContext);
    useEffect(()=>{
      handleNewEvent()
    },[])
  return (
    <div>
      {newEvent && newEvent.length !=0 ? <div>hi i am loading</div> :<NoEvent/>}
      
      </div>
  )
}

export default NewEvent