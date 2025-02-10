import React from 'react'
import { Routes, Route} from 'react-router-dom';
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
const Indexcocirculer = () => {
  return (
    <div>
        <Navbar/>
       
        <div className='flex justify-start'>
                    Indexcocirculer
                     <div  className='w-full' > 
                      <Routes>
                        {/* <Route path='/' element={<Dashboard/>} /> */}
                      </Routes>
                     </div>
                    </div>
        <Footer/>
    </div>
  )
}

export default Indexcocirculer