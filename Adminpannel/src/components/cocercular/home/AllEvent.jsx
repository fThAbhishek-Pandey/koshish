import React, {useContext,useEffect} from 'react'
import { CocirculerContext } from '../../../context/cocirculer'

const AllEvent = () => {
  const { getEvent,handelgetEvent} = useContext( CocirculerContext)
     useEffect(()=>{
      handelgetEvent()
     },[])
  return (
    <div>{getEvent&& getEvent.map((item,idx)=>{
      return (
        <div key={idx}>
            {
              item
            }
        </div>
      )
    })}</div>
  )
}

export default AllEvent