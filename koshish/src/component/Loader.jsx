import React from 'react'

import Loading from '../assets/Loading2.svg'
const Loader = () => {
  return (
    <div className='text-5xl text-blue11'>

        <img className='bg-amber-800' src={Loading} alt="loaging..." />
    </div>
  )
}

export default Loader