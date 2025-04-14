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
import Error404 from '../../component/Error404';
import Mymentors from '../../component/App/family/mymentors';
import Myanouncement from '../../component/App/announcement/myanouncement';
import Myevent from '../../component/App/events/myevent';
import IndexAlumni from '../../component/App/family/indexalumni';
import IndexGallery from '../../component/App/gallery/IndexGallery';
import GalleryById from '../../component/App/gallery/GalleryById';
const IndexApp = () => {
  return (
    <div>
          <Navbar />

            <div className=''>
             <div  className='' > 

              <Routes>
                <Route path='/' element={<HomeApp/>} />
                <Route path='/events' element={<Events/>} />
                <Route path='/events/:id' element={<Myevent/>} />
                <Route path='/family/alumni' element={<IndexAlumni/>} />
                <Route path='/family' element={<Mentor/>} />
                <Route path='/family/:id' element={<Mymentors/>}/>
                <Route path='/announcement' element={<Announcements/>} />
                <Route path='/announcement/:id' element={<Myanouncement/>} />
                <Route path='/gallery' element={<IndexGallery/>} />
                <Route path='/gallery/:id' element={<GalleryById/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/contact' element={<Contact/>} />
                <Route path='*' element={<Error404/>} />
              </Routes>
             </div>
            </div>
            <Footer />
    </div>
  )
}

export default IndexApp