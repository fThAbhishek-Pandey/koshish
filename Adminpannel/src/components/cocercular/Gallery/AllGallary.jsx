import React, {useContext, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { CocirculerContext } from '../../../context/cocirculer'
const AllGallary = () => {
    const navigate = useNavigate()
     const {gallaryAll,handelGalleryAll,} = useContext(CocirculerContext)

     useEffect(()=>{
         handelGalleryAll()
     },[])
  
  return gallaryAll  && (
    <div>AllGallary
           <button onClick={()=>navigate('/gallery/add')} className='bg-blue-400 text-2xl text-white m-4 border-4 border-amber-400' >Add</button>
         <div>
         {gallaryAll &&  gallaryAll.length !=0 && gallaryAll.map((item)=>{
          return (
            <div key={item._id}>
              <h2>{item.galleryTitle}</h2>
              <button onClick={()=>navigate(`/gallery/${item._id}`)} className='bg-blue-400 text-2xl text-white m-4 border-4 border-amber-400' >View</button>
              <button onClick={()=>navigate(`/gallery/update/${item._id}`)} className='bg-blue-400 text-2xl text-white m-4 border-4 border-amber-400' >update</button> 
              <button onClick={()=>navigate(`/gallery/update/${item._id}`)} className='bg-blue-400 text-2xl text-white m-4 border-4 border-amber-400' >delete</button> 
            </div>
          )
         })}
         </div>
        
       
                          
  </div>
  )
}

export default AllGallary