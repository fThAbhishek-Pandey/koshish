import React, {useContext,useEffect} from 'react'
import { CocirculerContext } from '../../../context/cocirculer'
import {useNavigate } from 'react-router-dom'
const AllTestimorals = () => {
  const {getTestimoral, handelgetTestimoral} = useContext( CocirculerContext)
    const navigator = useNavigate()
  useEffect(()=>{
      handelgetTestimoral()
     },[])
     const handelChangevisibilty= (id)=>{

     }
  return (
    <div>{getTestimoral && getTestimoral.map((item,idx)=>{
      return (
        <div key={idx}>
            {
              item.name
            }
 <button className='border-4 ml-4 border-amber-400' onClick={()=>handelChangevisibilty(item._id)} >change Visibility</button>
              <button className='border-4 ml-4 border-amber-400' onClick={()=>navigator(`/landpage/testimorals/view/${item._id}`)} >View</button>
              <button className='border-4 ml-4 border-amber-400' onClick={()=>navigator(`/landpage/testimorals/update/${item._id}`)} >update</button>

        </div>
      )
    })}</div>
  )
}

export default AllTestimorals