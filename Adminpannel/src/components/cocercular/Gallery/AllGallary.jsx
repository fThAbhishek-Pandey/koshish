import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CocirculerContext } from '../../../context/cocirculer'
const AllGallary = () => {
    const navigate = useNavigate()
     const {gallaryAll,handelGalleryAll,} = useContext(CocirculerContext)
    const id = 123456789
  return (
    <div>AllGallary

        <button onClick={()=>navigate('/gallery/add')} className='bg-blue-400 text-2xl text-white m-4 border-4 border-amber-400' >Add</button>
        <button onClick={()=>navigate(`/gallery/${id}`)} className='bg-blue-400 text-2xl text-white m-4 border-4 border-amber-400' >View</button>
        <button onClick={()=>navigate(`/gallery/update/${id}`)} className='bg-blue-400 text-2xl text-white m-4 border-4 border-amber-400' >update</button>                    
  </div>
  )
}

export default AllGallary