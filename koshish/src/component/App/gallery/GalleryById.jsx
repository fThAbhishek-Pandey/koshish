import { useParams } from 'react-router-dom';
import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../../context/App';
import GalleryCard from './GalleryCard';

const GalleryById = () => {
  const { id } = useParams();
  const {docuTitle, setDocuTitle, galleryById, handleGallaryById } = useContext(AppContext);

  useEffect(() => {
    handleGallaryById(id);
  }, [id]);
  
  useEffect(()=>{
      setDocuTitle(`${galleryById.galleryTitle}-Koshish`)
  },[docuTitle,id,galleryById])
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

  const socialLinks = [
    { name: 'YouTube', url: youtube },
    { name: 'LinkedIn', url: linkedin },
    { name: 'Google Photos', url: googlePhoto },
    { name: 'Instagram', url: instagram },
    { name: 'Facebook', url: facebook },
  ];

  return galleryById && (
    <div className="relative top-20 md:top-32 mb-28 px-4 w-full max-w-6xl mx-auto space-y-8">
      <div className="text-left">
        <h1 className="text-4xl font-extrabold text-blue10 mb-2">{galleryTitle}</h1>
        <p className="text-sm text-gray-500">{new Date(date).toLocaleDateString()}</p>
      </div>

      <div className="max-w-full mx-auto text-left text-md text-gray-800">
        <p>{galleryDescription}</p>
      </div>

      <div className="flex flex-wrap justify-start gap-4">
        {socialLinks.map(
          (link, idx) =>
            link.url !="NAN" && (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-50 text-blue-600 border border-blue-200 rounded-md hover:bg-blue-100 transition"
              >
                {link.name}
              </a>
            )
        )}
      </div>

      {Photo && Photo.length > 0 ? (
        <GalleryCard gallery={Photo} />
      ) : (
        <div className="text-center text-gray-500 text-lg">
          No images available in this gallery.
        </div>
      )}
    </div>
  );
};

export default GalleryById;
