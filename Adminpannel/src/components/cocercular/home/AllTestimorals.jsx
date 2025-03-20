import React, {useContext,useEffect} from 'react'
import { CocirculerContext } from '../../../context/cocirculer'

const AllTestimorals = () => {
  const {getTestimoral, handelgetTestimoral} = useContext( CocirculerContext)
     useEffect(()=>{
      handelgetTestimoral()
     },[])
  return (
    <div>{getTestimoral && getTestimoral.map((item,idx)=>{
      return (
        <div key={idx}>
            {
              item.name
            }
        </div>
      )
    })}</div>
  )
}

export default AllTestimorals