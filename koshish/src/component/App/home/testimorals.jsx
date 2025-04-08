import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../context/App";
import { FaLinkedin } from "react-icons/fa6";
import Loader from "../../Loader";
import ServerErr from "../../SeverErr";
const Testimorals = () => {
  const { testimorals, handelTestimorals } = useContext(AppContext);
   const [isloaded, setIsLoaded] = useState(true);
  useEffect(() => {
    handelTestimorals();
  }, []);
  useEffect(()=>{
    if(testimorals && testimorals.length !=0) setIsLoaded(false);
  },[testimorals])
  return (
    <div className="pb-8">
      <h2 className="text-4xl sm:text-5xl pb-4 font-bold text-blue10 pt-16 text-center">Testimorals</h2>
      <div className="text-center text-lg pb-5">
      Testimonial should reflect how KOSHISH has contributed to personal growth, education, and social upliftment.
      </div>
      {isloaded ? (
        <Loader />
      ) : <div>
      {  
        testimorals== '5xx' ? <ServerErr/>:
        <div className=" border-0 border-blue20 ">
          <div className="grid grid-cols-1 md:grid-cols-3  gap-5">
            {testimorals.slice(-3).map((item, idx) => {
              return (
                <div
                key={idx}
                className="group bg-green-100 border border-gray-300 shadow-md rounded-xl p-6 w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <img
                    className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full object-cover shadow-lg transition-transform duration-300 group-hover:scale-105"
                    src={item.image}
                    alt={item.name}
                  />
                  <div className="text-center sm:text-left flex flex-col gap-3 w-full">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="font-bold text-2xl text-gray-900">{item.name}</div>
                      <a href={item.linkedin} target="_blank" className="text-blue-600 hover:text-blue-800 text-3xl">
                        <FaLinkedin />
                      </a>
                    </div>
                    <div className="text-gray-700 text-lg font-medium italic">{item.headline}</div>
                  </div>
                </div>
                <div className="mt-5 text-gray-600 text-base p-4 bg-gray-50 rounded-lg border-l-4 border-blue-500">
                  {item.about}
                </div>
              </div>
              );
            })}
          </div>
        </div>
      } 
      </div>
      }

      {console.log("testimorals", testimorals)}
    </div>
  );
};

export default Testimorals;
