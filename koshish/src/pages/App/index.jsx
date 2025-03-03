import React from 'react'
import { Routes, Route} from 'react-router-dom';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';
import Events from './events';
import Mentor from './mentor';
import HomeApp from './home';
import Announcements from './announcements';
import Contact from './contact';
import About from './about';
const IndexApp = () => {
  return (
    <div>
          <Navbar />

            <div className=''>
             <div  className='' > 

              <Routes>
                <Route path='/' element={<HomeApp/>} />
                <Route path='/events' element={<Events/>} />
                <Route path='/mentors' element={<Mentor/>} />
                <Route path='/announcement' element={<Announcements/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/contact' element={<Contact/>} />
              </Routes>
             </div>
            </div>
            <Footer />
    </div>
  )
}

export default IndexApp