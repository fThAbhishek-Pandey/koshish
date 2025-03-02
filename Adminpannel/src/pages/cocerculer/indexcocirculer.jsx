import React from 'react'
import { Routes, Route} from 'react-router-dom';
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import AddMentor from './AddMentor';
import DashboardCociculer from './DashboardCociculer';
import TerminateMentor from './TerminateMentor';
import UpdateMentor from './UpdateMentor';
import SidebarCocirculer from '../../components/cocercular/SidebarCocirculer';
import Announcement from './Announcement';
import Handlehome from './handlehome';
import AddTopMentor from '../../components/cocercular/home/AddTopMentor'
import AddEvent from '../../components/cocercular/home/AddEvent'
import AddTestimorals from '../../components/cocercular/home/AddTestimorals';
const Indexcocirculer = () => {
  return (
    <div>
        <Navbar/>
        
        <div className='flex justify-start'>
                 <SidebarCocirculer/>
                     <div  className='w-full' > 
                      <Routes>
                        <Route path='/' element={<DashboardCociculer />} />
                        <Route path='/addmentor' element={<AddMentor/>} />
                        <Route path='/terminate-mentor' element={<TerminateMentor/>} />
                        <Route path='/update-mentor' element={<UpdateMentor/>} />
                        <Route path='/announcement' element={<Announcement/>} />
                        <Route path='/add-header' element={<Handlehome/>} />
                        <Route path='/add-event' element={<AddEvent/>} />
                        <Route path='/add-topmentor' element={<AddTopMentor/>} />
                        <Route path='/add-testimorals' element={<AddTestimorals/>} />
                      </Routes>
                     </div>
                    </div>
        <Footer/>
    </div>
  )
}

export default Indexcocirculer