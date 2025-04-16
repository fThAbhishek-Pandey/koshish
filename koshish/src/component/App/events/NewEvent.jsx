import React from "react";
import NoEvent from "./NoEvent";
import { useEffect, useContext } from "react";
import { AppContext } from "../../../context/App";
import ServerErr from "../../SeverErr";
import Loader from "../../Loader";
import EventCard from "./EventCard";
const NewEvent = () => {
  const { newEvent, handleNewEvent } = useContext(AppContext);
  useEffect(() => {
    handleNewEvent();
  }, []);
  console.log("newEvent: ", newEvent);
  return (
    <div className="relative  px-4 sm:px-6 lg:px-8">
      {newEvent != "5xx" ? (
        <div>
          {newEvent == "NODATA" ? (
            <NoEvent />
          ) : (
            <div>
              {
                <div className="min-h-screen bg-green-50 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
                  {newEvent.length == 0 ? (
                    <Loader />
                  ) : (
                    newEvent.map((event) => (
                      <EventCard key={event._id} event={event} />
                    ))
                  )}
                </div>
              }
            </div>
          )}
        </div>
      ) : (
        <NoEvent />
      )}
    </div>
  );
};

export default NewEvent;
