import React from 'react'
import PastAnouncement from './PastAnouncement'
import NewAnouncement from './newAnouncement'
const Anouncement = () => {
  return (
    <div className='relative top-20 md:top-32'> 
        
        <NewAnouncement/>
        <PastAnouncement/>
    </div>
  )
}

export default Anouncement