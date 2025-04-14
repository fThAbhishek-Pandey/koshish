import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-autoplay.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-share.css';
import 'lightgallery/css/lg-rotate.css';

// import plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgAutoplay from 'lightgallery/plugins/autoplay';
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgRotate from 'lightgallery/plugins/rotate';

import React from 'react';

const GalleryCard = ({gallery}) => {
  const onInit = () => {
    console.log('lightGallery has been initialized');
  };

  

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">{gallery.tittle}</h2>
      <div className="">
      
        <LightGallery
          onInit={onInit}
          speed={500}
          plugins={[lgThumbnail, lgZoom, lgAutoplay, lgFullscreen, lgRotate,]}
        >
          {gallery.images.map((image, index) => (
            <a
              href={image.src}
              key={index}
              data-sub-html={`<h4 class='text-5xl font-medium text-center text-blue-500'>${image.title}</h4>`}
              className="block"
            >
              <img
                alt={image.alt}
                src={image.src}
                className="w-full h-auto object-contain  rounded-xl shadow-md hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </a>
          ))}
        </LightGallery>
         
      </div>
    </div>
  );
};

export default GalleryCard;
