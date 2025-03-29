import React from 'react'
import { useParams } from 'react-router-dom'

const Myanouncement = () => {
    const {id} = useParams('id')
    console.log("_id: ",id);
    
  return (
    <div>_id: {id}</div>
  )
}

export default Myanouncement