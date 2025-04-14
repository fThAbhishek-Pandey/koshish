import React, {useContext, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../../context/App'
const Memories = () => {
    const navigater = useNavigate()
    const { memories,handleMemories } = useContext(AppContext)
      useEffect(()=>{
        handleMemories()
      },[])
  return (
    <div>
        <div>Memories</div>
      <button onClick={()=>navigater('/gallery/12367')}>click me</button>
    </div>
  
  )
}

export default Memories