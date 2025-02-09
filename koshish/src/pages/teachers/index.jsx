import React from 'react'
import { Routes, Route} from 'react-router-dom';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';
const IndexTeacher = () => {
  return (
    <div>
          <Navbar />
            <div className='flex justify-start'>
               teacher
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

export default IndexTeacher