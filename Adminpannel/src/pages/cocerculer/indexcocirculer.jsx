import React from 'react'
import { Routes, Route} from 'react-router-dom';
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import DashboardCociculer from './DashboardCociculer';
import SidebarCocirculer from '../../components/cocercular/SidebarCocirculer';
import Announcement from './Announcement';
import AddTopMentor from '../../components/cocercular/home/AddTopMentor'
import AddEvent from '../../components/cocercular/home/AddEvent'
import AddTestimorals from '../../components/cocercular/home/AddTestimorals';
import AddMentor from '../../components/cocercular/mentor/addMentor';
import AllEvent from '../../components/cocercular/home/AllEvent';
import AllHeader from '../../components/cocercular/home/AllHeader';
import Header from '../../components/cocercular/home/header';
import AddAchievement from '../../components/cocercular/home/AddAchievement';
import AllMentor from '../../components/cocercular/mentor/AllMentor';
import AllTopMentor from '../../components/cocercular/home/AllTopMentor';
import AllTestimorals from '../../components/cocercular/home/AllTestimorals';
import AllAchievement from '../../components/cocercular/home/AllAchievement';
import UpdateEvent from '../../components/cocercular/home/UpdateEvent';
import UpdateHeader from '../../components/cocercular/home/UpdateHeader';
import UpdateTestimorals from '../../components/cocercular/home/UpdateTestimorals';
import UpdateTopmentor from '../../components/cocercular/home/UpdateTopmentor';
import UpdateAchievement from '../../components/cocercular/home/UpdateAchievement';
import UpdateMentor from '../../components/cocercular/mentor/UpdateMentor';
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
                        <Route path='/mentor/:id' element={<UpdateMentor/>} />
                        {/* home */}
                        {/* header */}
                        <Route path='/landpage/header/add' element={<Header/>} />
                        <Route path='/landpage/header/all' element={<AllHeader/>} />
                        <Route path='/landpage/header/:id' element={<UpdateHeader/>} />
                        {/* event */}
                        <Route path='/landpage/event/add' element={<AddEvent/>} />
                        <Route path='/landpage/event/all' element={<AllEvent/>} />
                        <Route path='/landpage/event/:id' element={<UpdateEvent/>} />
                        {/* top mentor */}
                        <Route path='/landpage/topmentor/add' element={<AddTopMentor/>} />
                        <Route path='/landpage/topmentor/all' element={<AllTopMentor/>} />
                        <Route path='/landpage/topmentor/:id' element={<UpdateTopmentor/>} />
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
                      </Routes>
                     </div>
                    </div>
        <Footer/>
    </div>
  )
}

export default Indexcocirculer