import React from 'react'
import { useParams } from 'react-router-dom';
const Myevent = () => {
    const {id} = useParams('id')
    console.log("_id: ",id);
  return (
    <div>_id: {id}</div>
  )
}

export default Myevent