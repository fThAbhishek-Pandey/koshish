import React, {useContext,useEffect} from 'react'
import { CocirculerContext } from '../../../context/cocirculer'
import { useNavigate, useParams } from 'react-router-dom'
const EventById = () => {
    const { EventById, setEventById,handelgetEventById,handelupdateEventById,handelTopEvent,handelHideEvent} = useContext( CocirculerContext)
      const navigater = useNavigate();
      const {id} = useParams()
      console.log("id", id);
         useEffect(()=>{
            handelgetEventById(id)
         },[])
  return EventById && (
    <div>{EventById.name}
    {id}
    <button onClick={()=>navigater(`/event/update/${EventById._id}`)} 
        className='border-4 bg-amber-400'
        >update</button>
    </div>
  )
}

export default EventById