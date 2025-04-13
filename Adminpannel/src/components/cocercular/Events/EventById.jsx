import React, {useContext,useEffect} from 'react'
import { CocirculerContext } from '../../../context/cocirculer'
import { useNavigate, useParams } from 'react-router-dom'

const EventById = () => {
    const { EventById,handelDeleteEvent, setEventById,handelgetEventById,handelupdateEventById,handelTopEvent,handelHideEvent} = useContext( CocirculerContext)
      const navigater = useNavigate();
      const {id} = useParams()
      console.log("id", id);
         useEffect(()=>{
            handelgetEventById(id)
         },[])

      const handelHide = ()=>{
        handelHideEvent(id)
      }
      const TopEvent= ()=>{
        handelTopEvent(id)
      }
      const DeleteEvent= ()=>{
        handelDeleteEvent(id)
      }
  return EventById && (
    <div>{EventById.name}
    {id}
    <button onClick={()=>navigater(`/event/update/${EventById._id}`)} 
        className='border-4 bg-amber-400'
        >update</button>
          <button onClick={handelHide} 
        className='border-4 bg-amber-400'
        >hide</button>
        <button onClick={TopEvent} 
        className='border-4 bg-amber-400'
        >Top Event</button>
        <button onClick={DeleteEvent} 
        className='border-4 bg-red-400'
        >Delete</button>
    </div>
  )
}

export default EventById