import { useParams } from 'react-router-dom';
import React, {useContext, useEffect} from 'react'
import { AppContext } from '../../../context/App'
import GalleryCard from './GalleryCard'
const GalleryById = () => {
    const {id} = useParams();
    const { galleryById, handleGallaryById,} = useContext(AppContext)
          useEffect(()=>{
            handleGallaryById(id)
          },[])
    const gallery ={ 
        tittle: "This is my Gallery",
        thumbnail:"https://picsum.photos/id/1018/1000/600/",
        images : [
        {
          src: "https://picsum.photos/id/1018/1000/600/",
          alt: "Flag of India",
          title: "Indian Flag",
        },
        {
          src: "https://picsum.photos/id/1015/1000/600/",
          alt: "Mountain Landscape",
          title: "Peaceful Mountains",
        },
        {
          src: "https://picsum.photos/id/1019/1000/600/",
          alt: "Nature",
          title: "Lush Greenery",
        },
        {
          src: "https://picsum.photos/id/1019/1000/600/",
          alt: "Sunset",
          title: "Golden Sunset",
        },
      ]};
  return (
    <div className='relative top-20 md:top-46'>
        <h1>{id}hello this is id</h1>
        <GalleryCard gallery = {gallery}/>

        </div>
  )
}

export default GalleryById