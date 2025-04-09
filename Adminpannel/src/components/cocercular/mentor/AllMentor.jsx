import React, { useState,useContext,useEffect } from 'react'
import { CocirculerContext } from '../../../context/cocirculer';
import {useNavigate } from 'react-router-dom'
const AllMentor = () => {
  const {getMentor ,handelgetMentor} = useContext(CocirculerContext)
     const navigator = useNavigate()
        useEffect(()=>{
  
          handelgetMentor();
  
        },[])
  return getMentor  && (
    <div>{getMentor.map((item)=> (<div key={item._id}>
         {item.name}
          <button onClick={()=>navigator(`/mentor/${item._id}`)} className='border-4'>update</button>
      </div>))}</div>
  )
}

export default AllMentor