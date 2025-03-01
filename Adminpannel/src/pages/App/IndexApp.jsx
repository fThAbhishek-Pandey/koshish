import React from 'react'
import { Routes, Route} from 'react-router-dom';
import Navbar from "../../components/Navbar";
import Footer from '../../components/Footer';

const IndexApp = () => {
  return (
    <div>
        <Navbar/>
        <div className="">
        IndexApp
        <div className="">
        


          <Routes>
            {/* <Route path='/' element={<Dashboard/>} /> */}
        </Routes>
        </div>
      </div>
        <Footer/>
        </div>
  )
}

export default IndexApp