import React from 'react'
import { Routes, Route} from 'react-router-dom';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';
const IndexStudent = () => {
  return (
    <div>
          <Navbar />
            <div className='flex justify-start'>
               Student
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

export default IndexStudent