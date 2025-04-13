import React, {useContext,useEffect} from 'react'
import { CocirculerContext } from '../../../context/cocirculer'
import { useNavigate } from 'react-router-dom'
const AllEvent = () => {
  const { getEvent,handelgetEvent} = useContext( CocirculerContext)
  const navigater = useNavigate();
     useEffect(()=>{
      handelgetEvent()
     },[])
  return (
    <div>{getEvent&& getEvent.map((item,idx)=>{
      return (
        <div key={idx}>
            {
              item.name
            }
            <button onClick={()=>navigater(`/event/view/${item._id}`)} className='border-4 border-amber-300'>view</button>
        </div>
      )
    })}</div>
  )
}

export default AllEvent