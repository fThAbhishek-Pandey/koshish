import React from 'react'
import { Routes, Route} from 'react-router-dom';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';
const IndexApp = () => {
  return (
    <div>
          <Navbar />
            <div className='flex justify-start'>
              <h2 className='w-full'>Abhishek</h2>
             <div  className='w-full' > 
              <Routes>
                {/* <Route path='/' element={<Dashboard/>} /> */}
              </Routes>
             </div>
            </div>
            <Footer />
    </div>
  )
}

export default IndexApp