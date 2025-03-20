import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../context/App";
import { FaLinkedin } from "react-icons/fa6";
import Loader from "../../Loader";
const Testimorals = () => {
  const { testimorals, handelTestimorals } = useContext(AppContext);
  useEffect(() => {
    handelTestimorals();
  }, []);
  return (
    <div>
      <h2 className="text-center text-blue10 text-2xl">Testimorals</h2>
      <div className="text-center text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
        voluptas. Accusantium officiis natus nihil. Iste voluptatibus explicabo
        saepe accusamus, animi, laudantium veniam voluptatem pariatur officiis
        expedita reprehenderit deleniti. Ex, doloremque!
      </div>
      {!testimorals ? (
        <Loader />
      ) : (
        <div className=" border-0 border-blue20 ">
          <div className="grid grid-cols-1 md:grid-cols-3  gap-5">
            {testimorals.slice(-3).map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="group bg-white border-2 border-blue11 shadow-lg items-center pl-4 text-center w-full transition-transform duration-300"
                >
                  <div className="pt-2 flex items-start">
                    <img
                      className="w-full  sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full object-cover shadow-md group-hover:scale-110 transition-transform duration-300"
                      src={item.image}
                      alt={item.name}
                    />

                    <div className=" p-4 gap-2 text-xl align-middle">
                      <div className="flex items-end gap-2">
                      <div className="font-bold ">{item.name}</div>
                      <div className="text-blue10">
                        <a href={item.linkedin} target="_blank">
                          <FaLinkedin />
                        </a>
                      </div>
                      </div>
                     
                      <div className="p-1 text-lg">{item.headline}</div>
                    </div>
                  </div>

                  <div className="text-m p-3">{item.about}</div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {console.log("testimorals", testimorals)}
    </div>
  );
};

export default Testimorals;
