import React, {useContext,useEffect} from 'react'
import { CocirculerContext } from '../../../context/cocirculer'
import { useParams,useNavigate } from 'react-router-dom'
const NewsById = () => {
  const {newsById,handelgetNewsById,
    handelHideNewsById,handelUpdateNews,} = useContext( CocirculerContext)
      const navigator = useNavigate()
      const {id} = useParams()
        useEffect(()=>{
          handelgetNewsById(id)
        },[])
        console.log("this is news by id",newsById)
       const handelChangevisibilty= (id)=>{
   
        }
  return newsById && (
    <div> 
          News by id
          <div>
          {NewsById.heading }
          </div>
         

      <button className='border-4 ml-4 border-amber-400' onClick={()=>handelChangevisibilty(item._id)} >change Visibility</button>
              
               <button className='border-4 ml-4 border-amber-400' onClick={()=>navigator(`/news/update/${heading._id}`)} >update</button>
    </div>
  )
}

export default NewsById