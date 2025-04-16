import React, { useState, useContext, useEffect } from 'react'
import { CocirculerContext } from '../../../context/cocirculer'
import { useParams,useNavigate } from 'react-router-dom'
const HeaderById = () => {
  const {HeaderById, handelgetHeaderById,handelHideHeaderById,} = useContext(CocirculerContext)
  const {id} = useParams()
   const navigator = useNavigate()
  useEffect(()=>{
    handelgetHeaderById(id)
  },[])
  return HeaderById&& (
    <div> 
          header
          {HeaderById.heading}
          <button onClick={()=>navigator(`/landpage/header/update/${HeaderById._id}`)} className='bg-amber-500'>update</button>

    </div>
  )
}

export default HeaderById