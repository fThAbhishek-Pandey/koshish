import React from 'react'
import {useParams} from 'react-router-dom'
import { CocirculerContext } from '../../../context/cocirculer';
import { useContext } from 'react';
import { useEffect } from 'react';
import {useNavigate } from 'react-router-dom'
const GetMentorById = () => {
      const {id} = useParams();
      const navigator = useNavigate()
      const {MentorById, setMentorById,handelTearminateMentorById,handelMakeTopMentorById ,handelMentorById} = useContext(CocirculerContext);
      useEffect(()=>{
        handelMentorById(id);
      },[])
      const HandelMakeTopMentor = ()=>{
        handelTearminateMentorById(id)
      }
      const HandelTerminateMentor = ()=>{
        handelMakeTopMentorById(id)
      }
      return (
    <div><div>{id}<span>{MentorById.name}</span>
    <button onClick={()=>navigator(`/mentor/update/${id}`)} className='border-4'>update</button>
    <button onClick={ HandelTerminateMentor} className='border-4'>Terminate</button>
    <button onClick={HandelMakeTopMentor} className='border-4'>Change Top Mentor</button>
    </div>
    </div>
  )
}

export default GetMentorById