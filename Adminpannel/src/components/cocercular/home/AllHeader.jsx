import React, {useContext,useEffect} from 'react'
import { CocirculerContext } from '../../../context/cocirculer'
import {useNavigate } from 'react-router-dom'
const AllHeader = () => {
  const {getHeader,handelgetHeader} = useContext( CocirculerContext)
   const navigator = useNavigate()
     useEffect(()=>{
      handelgetHeader()
     },[])
    const handelChangevisibilty= (id)=>{

     }
  return (
   <div>
        <h2>Headers</h2>
    {getHeader && getHeader.map((item ,idx)=>{
        return (
          <div key={idx}>
              {
                item.heading 
              }
              <button className='border-4 ml-4 border-amber-400' onClick={()=>handelChangevisibilty(item._id)} >change Visibility</button>
              <button className='border-4 ml-4 border-amber-400' onClick={()=>navigator(`/landpage/header/view/${item._id}`)} >View</button>
              <button className='border-4 ml-4 border-amber-400' onClick={()=>navigator(`/landpage/header/update/${item._id}`)} >update</button>
          </div>
        )
    })}

   </div> 
  )
}

export default AllHeader