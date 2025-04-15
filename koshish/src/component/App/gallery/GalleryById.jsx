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
          const {
              galleryTitle,
              galleryDescription,
              date,
              Photo,
              youtube,
              linkedin,
              googlePhoto,
              instagram,
              facebook,
            } = galleryById;
         console.log("galleryByID : ", galleryTitle,
          galleryDescription,
          date,
          Photo,
          youtube,
          linkedin,
          googlePhoto,
          instagram,
          facebook,)

      const socialLinks = [
        { name: 'YouTube', url: youtube },
        { name: 'LinkedIn', url: linkedin },
        { name: 'Google Photos', url: googlePhoto },
        { name: 'Instagram', url: instagram },
        { name: 'Facebook', url: facebook },
      ];
  return galleryById && (
    <div className='relative top-20 md:top-46 mb-72 p-6 w-full max-w-5xl mx-auto space-y-6'>
        <h1>{id}</h1>
        <div>
        <h1 className="text-3xl font-bold">{galleryTitle}</h1>
        <p className="text-gray-600">{new Date(date).toLocaleDateString()}</p>
      </div>

      <div>
        <p className="text-lg">{galleryDescription}</p>
      </div>

      <div className="flex flex-wrap gap-3">
        {socialLinks.map((link, idx) => (
          link.url && (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              {link.name}
            </a>
          )
        ))}
      </div>
        { Photo && Photo.length>0 ? <GalleryCard gallery = {Photo}/>
        : ( <div className="text-center col-span-full text-gray-500">
          No images available in this gallery.
        </div>
      )}

        </div>
  )
}

export default GalleryById