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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 pt-6">
     
      
      
        <LightGallery
          onInit={onInit}
          speed={500}
          plugins={[lgThumbnail, lgZoom, lgAutoplay, lgFullscreen, lgRotate,]}
        >
          {gallery.map((image, index) => (
            <a
              href={image.image}
              key={index}
              data-sub-html={`
                <div>
                  <h1 class='text-xl font-semibold text-blue-300 mb-1'>${image.tittle}</h4>
                  <p class='text-sm text-white'>${image.desc}</p>
                </div>`}
              className="block"
            >
              <img
                alt={image.tittle}
                src={image.image}
                className="w-full h-auto object-contain rounded-xl shadow-md hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </a>
          ))}
        </LightGallery>

    </div>
  );
};

export default GalleryCard;
