import React from 'react'
import NoEvent from './NoEvent'
import { useEffect,useContext } from 'react'
import { AppContext } from '../../../context/App'
const PastEvent = () => {
  const {
    pastEvent,handlePastEvent,}= useContext(AppContext);
    useEffect(()=>{
      handlePastEvent()
    },[])
  return (
    <div>
      {
         pastEvent &&  pastEvent.length !=0?<div>Past data is Loading...</div> :<NoEvent/>
      } 
    </div>
  )
}

export default PastEvent