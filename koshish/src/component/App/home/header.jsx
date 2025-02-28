import React, {useContext, useEffect} from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AppContext } from '../../../context/App';
const IndexHeader = () => {
   const {headerData,handleHeader} = useContext(AppContext);
   useEffect(()=>{
    handleHeader();
   },[])
   console.log("slider data ", headerData)
   const sliderData = headerData
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className=' w-full bg-[#222] pb-20 sm:pb-16 md:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8'>
      <div className='px-4 py-4 md:py-10 lg:py-10'>
        <h1 className='text-white text-center text-3xl font-semibold md:text-4xl lg:text-5xl'>
          Welcome to <span className='text-4xl font-bold text-indigo-600 underline md:text-5xl lg:text-6xl'>KOSHISH</span>
        </h1>
        <p className='w-full md:w-3/4 lg:w-1/2 my-2 sm:mt-8 text-gray-400 text-center mx-auto text-sm sm:text-base px-4'>
          <span className='font-bold'>KOSHISH</span> is a social initiative dedicated to empowering marginalized communities, promoting education, fostering equality, and creating sustainable opportunities.
        </p>
      </div>
      
      <div className='mx-auto w-full px-4 sm:px-6 md:px-8 lg:w-4/5 xl:w-3/4 2xl:w-[70%]'>
     { sliderData &&  <Slider {...settings} >
          {sliderData.map((data) => (
            <div key={data._id} className='bg-white rounded-xl shadow-lg overflow-hidden'>
              <div className='relative pt-[56.25%]'>
                <img 
                  src={data.image} 
                  alt={`Slide ${data._id} - ${data.para.slice(0, 20)}...`} 
                  className='absolute top-0 left-0 w-full h-full object-cover rounded-xl'
                />
                <div  className='bg-amber-300' >{data._id}</div>
                <div  className='bg-amber-300'>{data.heading}</div>
                <div  className='bg-amber-300'>{data.para}</div>
              </div>
            </div>
          ))}
        </Slider>}
      </div>
    </div>
  )
}

export default IndexHeader