import React from 'react'
import { Routes, Route} from 'react-router-dom';
import Navbar from "../../components/Navbar";
import Footer from '../../components/Footer';
const IndexApp = () => {
  return (
    <div>
        <Navbar/>
        <div className="flex justify-start">
        IndexApp
        <div className="w-full">
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