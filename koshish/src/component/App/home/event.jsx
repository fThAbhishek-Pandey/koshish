import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../../context/App";
import Loader from "../../Loader";
import ServerErr from "../../SeverErr";
import NoData from "../../NoData";
import { useNavigate } from "react-router-dom";
import EventCard from '../events/EventCard'
const Event = () => {
  const { homeEvent, handleHomeEvent } = useContext(AppContext);
  const [isloaded, setIsLoaded] = useState(true);
  const [active, setActive] = useState(false);
  const navigate = useNavigate()
  useEffect(() => {
    handleHomeEvent();
  }, []);
  useEffect(() => {
    if (homeEvent && homeEvent.length != 0) setIsLoaded(false);
  }, [homeEvent]);
  const cardData = homeEvent;

  return (
    <div className=" pb-16 px-4 sm:px-6 lg:px-8">
      <div className=" max-w-8xl mx-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue10 pt-16 text-center">
          Events
        </h1>
        <p className="w-full md:w-3/4  my-8 sm:my-10 text-gray-800 text-center mx-auto text-sm sm:text-base px-4">
          KOSHISH is an organization dedicated to empowering children through
          cultural and technical events. They foster creativity, innovation, and
          talent, providing a platform for young minds to showcase their skills
          and potential.
        </p>

        <div className="">
          {isloaded ? (
            <Loader />
          ) : (
            <div >
              {cardData == "5xx" ? (
                <ServerErr />
              ) :  
              <div>
                {  
                cardData =="NODATA" ? <NoData/>
                
                :
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-6 px-4 sm:px-6 lg:px-8 cursor-pointer">
                {cardData
                  .slice(-4)
                  .map((item) => (
                    <EventCard event={item}  />
                  ))} </div> }
             </div>
              }
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Event;
