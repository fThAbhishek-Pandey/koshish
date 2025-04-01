import React from 'react'
import PastAnouncement from './PastAnouncement'
import NewAnouncement from './newAnouncement'
const Anouncement = () => {
  return (
    <div className='relative top-20 md:top-32'> 
         <h2>New Anouncement</h2>
        <NewAnouncement/>
        <h2>Past Anouncement</h2>
        <PastAnouncement/>
    </div>
  )
}

export default Anouncement