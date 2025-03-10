import React , {useContext, useEffect}from 'react';
import { Slide, Fade } from 'react-awesome-reveal';
import { AppContext } from '../../../context/App';
import Loader from '../../Loader';
const Event = () => {
  const { homeEvent, handleHomeEvent} = useContext(AppContext);
  useEffect(()=>{
    handleHomeEvent();
  },[])
  const cardData=homeEvent
  
  return (
    <div className='bg-[#fff] pb-16 px-4 sm:px-6 lg:px-8'>
    <div className='bg-[#fff] max-w-8xl mx-auto'>
      <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-blue10 pt-16 text-center'>Events</h1>
      <p className="w-full md:w-3/4 lg:w-1/2 my-8 sm:my-10 text-gray-400 text-center mx-auto text-sm sm:text-base px-4">
        KOSHISH is an organization dedicated to empowering children through cultural and technical events. They foster creativity, innovation, and talent, providing a platform for young minds to showcase their skills and potential.
      </p>
      
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-6 px-4 sm:px-6 lg:px-8 cursor-pointer'>
        {!cardData ?<Loader/> : cardData.map(({ _id, thumbnail, name,desc, date }) => (
          <div key={_id} className='text-green20  border-2 border-blue10 shadow-md hover:rounded-2xl overflow-hidden relative group mb-4 transition-all duration-300'>
            <div className='relative w-full aspect-square'> 
              <img 
                src={thumbnail} 
                alt={name}
                className='w-full h-full object-cover' 
              />
            </div>
            
            <div className='absolute inset-0 opacity-0 group-hover:opacity-100 p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-500 flex items-center'>
              <div className='space-y-2 sm:space-y-4 w-full'>
                <Slide cascade>
                  <h1 className='text-xl sm:text-2xl lg:text-3xl font-bold'>{name}</h1>
                  <h1 className='text-xl sm:text-2xl lg:text-3xl font-bold'>{date}</h1>
                  <Fade cascade damping={0.05}>
                    <p className='text-xs sm:text-sm line-clamp-3 md:line-clamp-4'>{desc}</p>
                  </Fade>
                  <div className='text-center'>
                    <button className='border border-white px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm rounded-lg hover:bg-white/10 cursor-pointer transition-colors'>
                      View
                    </button>
                  </div>
                </Slide>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default Event;
