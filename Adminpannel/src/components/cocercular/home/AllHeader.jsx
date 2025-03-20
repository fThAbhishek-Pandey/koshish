import React, {useContext,useEffect} from 'react'
import { CocirculerContext } from '../../../context/cocirculer'

const AllHeader = () => {
  const {getHeader,handelgetHeader} = useContext( CocirculerContext)
     useEffect(()=>{
      handelgetHeader()
     },[])
  return (
   <div>
        <h2>Headers</h2>
    {getHeader && getHeader.map((item ,idx)=>{
        return (
          <div key={idx}>
              {
                item.heading
              }
          </div>
        )
    })}

   </div> 
  )
}

export default AllHeader