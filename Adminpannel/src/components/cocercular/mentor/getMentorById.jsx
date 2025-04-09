import React from 'react'
import {useParams} from 'react-router-dom'
import { CocirculerContext } from '../../../context/cocirculer';
import { useContext } from 'react';
import { useEffect } from 'react';
import {useNavigate } from 'react-router-dom'
const GetMentorById = () => {
      const {id} = useParams();
      const navigator = useNavigate()
      const {MentorById, setMentorById ,handelMentorById,} = useContext(CocirculerContext);
      useEffect(()=>{
        handelMentorById(id);
      },[])
      return (
    <div><div>{id}<span>{MentorById.name}</span>
    <button onClick={()=>navigator(`/mentor/update/${id}`)} className='border-4'>update</button>
    </div>
    </div>
  )
}

export default GetMentorById