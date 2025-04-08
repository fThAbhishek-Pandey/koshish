import React, { useContext, useEffect, useState } from 'react';
import Loader from '../../Loader';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AppContext } from '../../../context/App';
import ServerErr from '../../SeverErr';

const IndexHeader = () => {
  const { headerData, handleHeader } = useContext(AppContext);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    handleHeader();
  }, []);

  useEffect(() => {
    if (headerData && headerData.length !== 0) setIsLoaded(true);
  }, [headerData]);

  const sliderData = headerData || [];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 3000,
    rtl: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="w-full px-2 sm:px-4 md:px-10 lg:px-16 xl:px-24">
      {!isLoaded ? (
        <Loader />
      ) : headerData === '5xx' ? (
        <ServerErr />
      ) : (
        <Slider {...settings}>
          {sliderData.map((data) => (
            <div key={data._id} className="px-2">
              <div className="bg-green-100 border-2 border-blue-400 rounded-2xl shadow-lg overflow-hidden">
                <div className="relative pt-[56.25%] sm:pt-[50%] md:pt-[45%] lg:pt-[40%]">
                  <img
                    src={data.image}
                    alt={`Slide ${data._id}`}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h2 className="text-xl sm:text-2xl font-bold text-blue10 mb-2">{data.heading}</h2>
                  <p className="text-sm sm:text-base text-gray-700 hidden md:block">{data.para}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default IndexHeader;
