import React, {useContext, useEffect} from 'react'
import { CocirculerContext } from '../../context/cocirculer'
const Contact = () => {
    const {getcontact,handelContact} = useContext(CocirculerContext);
 useEffect(()=>{
    handelContact();
 },[])

  return (
    <div>
         {
            getcontact && <div>
                {
                    getcontact.map ((item,idx)=>{
                        return (
                            <div>
                                {item.name}
                            </div>
                        )
                    })
                }
            </div>
         }



        contact
    </div>
  )
}

export default Contact