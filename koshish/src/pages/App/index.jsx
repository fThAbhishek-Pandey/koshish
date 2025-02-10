import React from 'react'
import { Routes, Route} from 'react-router-dom';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';
import Header from './header';
import Culture from './culture';
import Events from './events';
import Mentor from './mentor';
import Achievement from './achievement';
import Testimorals from './testimorals';
const IndexApp = () => {
  return (
    <div>
          <Navbar />
            <div className='flex justify-start'>
              <h2 className='w-full'>koshish</h2>
             <div  className='w-full' > 

                      <Header/>
                      <Culture/>
                      <Events/>
                      <Mentor/>
                      <Achievement/>
                      <Testimorals/>
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