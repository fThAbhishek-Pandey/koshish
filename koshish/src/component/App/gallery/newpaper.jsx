import React, {useContext, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../../context/App'
const Newspaper = () => {
  const navigater = useNavigate()
  const {   newspaper, handleNewsPaper,} = useContext(AppContext)
        useEffect(()=>{
          handleNewsPaper() ;
        },[])
  return (
    <div>News papper

<button onClick={()=>navigater('/gallery/12367')}>click me</button>
    </div>

  )
}

export default Newspaper