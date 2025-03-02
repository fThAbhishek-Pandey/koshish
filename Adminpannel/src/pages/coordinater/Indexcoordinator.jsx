import React from "react";
import { Routes, Route } from "react-router-dom";
import ChangeCoordinator from "./changeCo-ordinator";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
const Indexcoordinator = () => {
  return (
    <div>
      <Navbar />

      <div className="">
        Indexcoordinator
        <div className="">
          <Routes>
            <Route path='/' element={<ChangeCoordinator/>} />
        </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Indexcoordinator;
