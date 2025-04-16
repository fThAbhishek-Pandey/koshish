import React, {useContext,useEffect} from 'react'
import { CocirculerContext } from '../../../context/cocirculer'
import {useNavigate } from 'react-router-dom'
const AllNews = () => {
    const {news, handelgetAllNews} = useContext( CocirculerContext)
    const navigator = useNavigate()
      useEffect(()=>{
        handelgetAllNews()
      },[])
      
     const handelChangevisibilty= (id)=>{
 
      }
   return news &&(
    <div>
         <h2>All news list </h2>
         <button className='border-4 ml-4 border-amber-400' onClick={()=>navigator(`/news/add`)} >Add News</button>
     {news && news.map((item ,idx)=>{
         return (
           <div key={idx}>
               {
                 item.heading 
               }
               <button className='border-4 ml-4 border-amber-400' onClick={()=>handelChangevisibilty(item._id)} >change Visibility</button>
               <button className='border-4 ml-4 border-amber-400' onClick={()=>navigator(`/news/${item._id}`)} >View</button>
               <button className='border-4 ml-4 border-amber-400' onClick={()=>navigator(`/news/update/${item._id}`)} >update</button>
           </div>
         )
     })}
 
    </div> 
   )
}

export default AllNews
