
import React, { useState, useContext, useEffect } from 'react'
import { CocirculerContext } from '../../../context/cocirculer'
import { useParams,useNavigate } from 'react-router-dom'
const TestimonialById = () => {
 const  {testimonialById,handelgetTestimoralById,}= useContext(CocirculerContext)
  const navigator = useNavigate()
 const {id} = useParams()
   useEffect(()=>{
    handelgetTestimoralById(id)
   },[])
   console.log("testmonial by id ",testimonialById)
  return testimonialById &&  (
    <div>
         {testimonialById.name}
        <button onClick={()=>navigator(`/landpage/testimorals/update/${testimonialById._id}`)}>update</button>
    </div>
  )
}

export default TestimonialById