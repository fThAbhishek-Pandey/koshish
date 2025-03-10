import React, {useContext, useEffect, useState} from 'react'
import Loader from '../../Loader';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AppContext } from '../../../context/App';
function MyArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style,color:'#8883FB', display: "block",margin:"15px 5px 5px 1px", background:"#8883FB" ,padding:"5px", border:"1px solid #8883FB" ,borderRadius: "25px"}}
      onClick={onClick}
    />
  );
}
const IndexHeader = () => {
   const {headerData,handleHeader} = useContext(AppContext);
   const [isloaded, setIsLoaded] = useState(false);
   useEffect(()=>{
    handleHeader();
   if(headerData) setIsLoaded(true);
   },[])
   console.log("slider data ", headerData)
   const sliderData = headerData || []
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 5000,
    rtl: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    nextArrow: <MyArrow/>,
    prevArrow : <MyArrow/>,
  };

  return (
    <div className=' w-full bg-[#fafafa] pb-20 sm:pb-16 md:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8'>
      <div className='px-4 py-4 md:py-10 lg:py-10'>
        <h1 className='text-blue11 text-center text-3xl font-semibold md:text-4xl lg:text-5xl'>
          Welcome to <span className='text-4xl font-bold text-blue10 underline md:text-5xl lg:text-6xl'>KOSHISH</span>
        </h1>
        <p className='w-full md:w-3/4 lg:w-1/2 my-2 sm:mt-8 text-gray-500 text-center mx-auto text-sm sm:text-base px-4'>
          <span className='font-bold'>KOSHISH</span> is a social initiative dedicated to empowering marginalized communities, promoting education, fostering equality, and creating sustainable opportunities.
        </p>
      </div>
      
      <div className='mx-auto  w-full px-4 sm:px-6 md:px-8 lg:w-4/5 xl:w-3/4 2xl:w-[70%]'>
     { isloaded ? <Slider {...settings} >
           { console.log(sliderData, typeof(sliderData))}
         
          {
           
          sliderData.map((data) => (
            <div key={data._id}  className='bg-blue11 border-2 border-blue10 rounded-xl shadow-lg overflow-hidden'>
              <div className='relative pt-[56.25%]'>
                <img 
                  src={data.image} 
                  alt={`Slide ${data._id} - ${data.para.slice(0, 10)}...`} 
                  className='absolute top-0 left-0 w-full h-full object-cover rounded-xl'
                />
               
              </div>
              <div className='h-24'>
              <div  className=' text-2xl font-semibold'>{data.heading}</div>
              <div  className=' text-lg'>{data.para}</div>
              </div>
               
            </div>
          ))}
        </Slider>:<div>
        {console.log("---> ",sliderData)}
        <Loader/>
       </div>}
      </div>
    </div>
  )
}

export default IndexHeader