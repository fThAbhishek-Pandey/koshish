import React from 'react'
import { useNavigate } from 'react-router-dom'
const Memories = () => {
    const navigater = useNavigate()
  return (
    <div>Memories
      <button onClick={()=>navigater('/gallery/12367')}>click me</button>
    </div>
  
  )
}

export default Memories