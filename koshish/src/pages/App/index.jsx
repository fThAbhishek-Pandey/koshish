import React from 'react'
import { Routes, Route} from 'react-router-dom';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';
import Culture from './culture';
import Events from './events';
import Mentor from './mentor';
import Achievement from './achievement';
import HomeApp from './home';
const IndexApp = () => {
  return (
    <div>
          <Navbar />
            <div className='flex justify-start'>
              <h2 className='w-full'>koshish</h2>
             <div  className='w-full' > 
   
              <Routes>
                <Route path='/' element={<HomeApp/>} />
                <Route path='/culture' element={<Culture/>} />
                <Route path='/event' element={<Events/>} />
                <Route path='/mentor' element={<Mentor/>} />
                <Route path='/achievement' element={<Achievement/>} />
              </Routes>
             </div>
            </div>
            <Footer />
    </div>
  )
}

export default IndexApp