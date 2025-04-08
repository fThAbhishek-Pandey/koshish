import React from 'react'
import NoEventImg from '../../../assets/Noevent.svg'
const NoEvent = () => {
  
  return (
    <div className='items-center' >

      <img 
      className='max-w-5xl h-72'
      src={NoEventImg} alt="NO Event yet" />
      <h2>No Event Yet. Please wait...</h2>
    </div>
  )
}
export default NoEvent