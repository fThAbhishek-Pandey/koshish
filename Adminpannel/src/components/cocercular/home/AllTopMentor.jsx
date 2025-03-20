import React, {useContext,useEffect} from 'react'
import { CocirculerContext } from '../../../context/cocirculer'

const AllTopMentor = () => {
  const {getTopMentor, handelgetTopMentor,} = useContext( CocirculerContext)
     useEffect(()=>{
      handelgetTopMentor()
     },[])
    
  return (
    <div>{getTopMentor && getTopMentor.map((item ,idx)=>{
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

export default AllTopMentor