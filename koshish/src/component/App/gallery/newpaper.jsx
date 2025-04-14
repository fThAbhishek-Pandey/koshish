import React from 'react'
import { useNavigate } from 'react-router-dom'
const Newspaper = () => {
  const navigater = useNavigate()
  return (
    <div>News papper

<button onClick={()=>navigater('/gallery/12367')}>click me</button>
    </div>

  )
}

export default Newspaper