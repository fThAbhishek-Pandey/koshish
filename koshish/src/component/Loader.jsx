import React from 'react';
import Loading from '../assets/loading2.svg';

const Loader = () => {
  return (
    <div className='flex items-center justify-center'>
      <img className='w-48 h-20  sm:h-24 animate-spin' src={Loading} alt='Loading...' />
    </div>
  );
};

export default Loader;
