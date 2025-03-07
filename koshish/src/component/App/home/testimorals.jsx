import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../../context/App'
import Loader from '../../Loader';
const Testimorals = () => {
  const { testimorals,handelTestimorals} = useContext(AppContext);
  useEffect(()=>{
    handelTestimorals()
  },[])
  return (
    <div>Testimorals


      {
       console.log("testimorals", testimorals)
      }
    </div>
  )
}

export default Testimorals