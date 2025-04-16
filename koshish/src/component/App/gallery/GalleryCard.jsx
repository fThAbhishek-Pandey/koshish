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

const GalleryCard = ({ gallery }) => {
  const onInit = () => {
    console.log('lightGallery has been initialized');
  };

  return (
    <div className="px-4 py-8">
      <div className="flex flex-wrap justify-center gap-6">
        <LightGallery
          onInit={onInit}
          speed={500}
          plugins={[lgThumbnail, lgZoom, lgAutoplay, lgFullscreen, lgRotate]}
          elementClassNames="flex flex-wrap gap-6 justify-center w-full"
        >
          {gallery.map((image, index) => (
            <a
              href={image.image}
              key={index}
              data-sub-html={`<div>
                  <h1 class='text-xl font-semibold text-blue-400 mb-1'>${image.tittle}</h1>
                  <p class='text-sm text-white'>${image.desc}</p>
                </div>`}
              className="w-full sm:w-[48%] md:w-[31%] lg:w-[23%] group overflow-hidden rounded-xl shadow-md"
            >
              <img
                alt={image.tittle}
                src={image.image}
                className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </a>
          ))}
        </LightGallery>
      </div>
    </div>
  );
};

export default GalleryCard;
