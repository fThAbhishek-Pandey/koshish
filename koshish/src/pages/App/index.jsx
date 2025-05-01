import React from 'react'
import { Routes, Route} from 'react-router-dom';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';
import Events from './events';
import HomeApp from './home';
import Announcements from './announcements';
import Contact from './contact';
import About from './about';
import Error404 from '../../component/Error404';
import Mymentors from '../../component/App/family/mymentors';
import Myanouncement from '../../component/App/news/myanouncement';
import Myevent from '../../component/App/events/myevent';
import IndexFamiliy from '../../component/App/family/indexFamiliy';
import IndexGallery from '../../component/App/gallery/IndexGallery';
import GalleryById from '../../component/App/gallery/GalleryById';
import PrivacyAndpolicy from '../../component/privacyAndpolicy';
const IndexApp = () => {
  return (
    <div className='bg-green-50'>
          <Navbar />

            <div className=''>
             <div  className='' > 

              <Routes>
                <Route path='/' element={<HomeApp/>} />
                <Route path='/events' element={<Events/>} />
                <Route path='/events/:id' element={<Myevent/>} />
                <Route path='/family' element={<IndexFamiliy/>} />
                <Route path='/family/:id' element={<Mymentors/>}/>
                <Route path='/news' element={<Announcements/>} />
                <Route path='/news/:id' element={<Myanouncement/>} />
                <Route path='/gallery' element={<IndexGallery/>} />
                <Route path='/gallery/:id' element={<GalleryById/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/contact' element={<Contact/>} />
                <Route path='/privacy-and-policy' element={<PrivacyAndpolicy/>} />
                <Route path='*' element={<Error404/>} />
              </Routes>
             </div>
            </div>
            <Footer />
    </div>
  )
}

export default IndexApp