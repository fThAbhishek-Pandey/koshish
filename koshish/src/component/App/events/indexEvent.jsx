import React from 'react'
import NewEvent from './NewEvent'
import PastEvent from './PastEvent'
const IndexEvent = () => {
  return (
    <div className='relative bg-green-50 top-20 md:top-32 mb-32'>
     <h2>NewEvent</h2>
     <NewEvent/>
     <h2>Past Event</h2>
     <PastEvent/>
    </div>
  )
}

export default IndexEvent