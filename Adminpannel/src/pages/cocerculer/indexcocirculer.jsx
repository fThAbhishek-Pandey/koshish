import React from 'react'
import { Routes, Route} from 'react-router-dom';
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import DashboardCociculer from './DashboardCociculer';
import SidebarCocirculer from '../../components/cocercular/SidebarCocirculer';
import Announcement from './Announcement';
import AddEvent from '../../components/cocercular/Events/AddEvent'
import AddTestimorals from '../../components/cocercular/home/AddTestimorals';
import AddMentor from '../../components/cocercular/mentor/addMentor';
import GetMentorById from '../../components/cocercular/mentor/getMentorById';
import AllEvent from '../../components/cocercular/Events/AllEvent';
import AllHeader from '../../components/cocercular/home/AllHeader';
import Header from '../../components/cocercular/home/header';
import AddAchievement from '../../components/cocercular/home/AddAchievement';
import AllMentor from '../../components/cocercular/mentor/AllMentor';
import AllTestimorals from '../../components/cocercular/home/AllTestimorals';
import AllAchievement from '../../components/cocercular/home/AllAchievement';
import UpdateEvent from '../../components/cocercular/Events/UpdateEvent';
import UpdateHeader from '../../components/cocercular/home/UpdateHeader';
import UpdateTestimorals from '../../components/cocercular/home/UpdateTestimorals';
import UpdateAchievement from '../../components/cocercular/home/UpdateAchievement';
import UpdateMentor from '../../components/cocercular/mentor/UpdateMentor';
import EventById from '../../components/cocercular/Events/EventById';
import Contact from '../../components/cocercular/contact';
import Addgallery from '../../components/cocercular/Gallery/Addgallery';
import GalleryById from '../../components/cocercular/Gallery/GalleryById';
import UpdateGallery from '../../components/cocercular/Gallery/UpdateGallery';
import AllGallary from '../../components/cocercular/Gallery/AllGallary';
const Indexcocirculer = () => {
  return (
    <div>
        <Navbar/>
        
        <div className='flex justify-start'>
                 <SidebarCocirculer/>
                     <div  className='w-full' > 
                      <Routes>
                        <Route path='/' element={<DashboardCociculer />} />
                        <Route path='/mentor/add' element={<AddMentor/>} />
                        <Route path='/mentor/all' element={<AllMentor/>} />
                        <Route path='/mentor/:id' element={<GetMentorById/>} />
                        
                        <Route path='/mentor/update/:id' element={<UpdateMentor/>} />
                        {/* home */}
                        {/* header */}
                        <Route path='/landpage/header/add' element={<Header/>} />
                        <Route path='/landpage/header/all' element={<AllHeader/>} />
                        <Route path='/landpage/header/:id' element={<UpdateHeader/>} />
                        {/* event */}
                        <Route path='/event/add' element={<AddEvent/>} />
                        <Route path='/event/all' element={<AllEvent/>} />
                        <Route path='/event/view/:id' element={<EventById/>} />
                        <Route path='/event/update/:id' element={<UpdateEvent/>} />
                        
                        {/* testimorals */}
                        <Route path='/landpage/testimorals/add' element={<AddTestimorals/>} />
                        <Route path='/landpage/testimorals/all' element={<AllTestimorals/>} />
                        <Route path='/landpage/testimorals/:id' element={<UpdateTestimorals/>} />
                        {/* Achivement */}
                        <Route path='/landpage/achievement/add' element={<AddAchievement/>} />
                        <Route path='/landpage/achievement/all' element={<AllAchievement/>} />
                        <Route path='/landpage/achievement/:id' element={<UpdateAchievement/>} />
                        {/* Announcement */}
                        <Route path='/announcement' element={<Announcement/>} />
                        <Route path='/announcement/add' element={<Announcement/>} />
                        <Route path='/announcement/update/:id' element={<Announcement/>} />
                        <Route path='/announcement/:id' element={<Announcement/>} />
                        {/* Gallary */}
                        <Route path='/gallery' element={<AllGallary/>} />
                        <Route path='/gallery/add' element={<Addgallery/>} />
                        <Route path='/gallery/update/:id' element={<UpdateGallery/>} />
                        <Route path='/gallery/:id' element={<GalleryById/>} />
                        <Route path='/contact' element={<Contact/>} />
                      </Routes>
                     </div>
                    </div>
        <Footer/>
    </div>
  )
}

export default Indexcocirculer