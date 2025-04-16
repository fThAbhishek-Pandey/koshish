import React, { useContext, useEffect } from "react";
import { AppContext } from "../../../context/App";
import MentorCard from "./MentorCard";
import ServerErr from "../../SeverErr";
import NoData from "../../NoData";
import Loader from "../../Loader";
import { useNavigate } from "react-router-dom";
const Faculty = () => {
     const { allFuclty, setAllFuculty,handelgetAllFaculty } = useContext(AppContext);
      const navigate = useNavigate();
      useEffect(() => {
        handelgetAllFaculty();
        }, []);
  return (
    <div className="md:mb-32 py-6 sm:px-6 lg:px-8 mb-24 text-center "  >

<h2 className="text-2xl sm:text-3xl font-bold text-center text-blue10 mb-6">
        Meet Our Visionary

      </h2>
      <div className="my-4 p-4 max-w-5xl text-center">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit,
        placeat voluptatibus ut tempore, totam fuga veritatis tempora nulla nam
        libero quo et eius, eum explicabo hic nihil maxime atque. Velit.
      </div>
      <div className="bg-green-50 p-5 rounded-lg shadow-md">
        {allFuclty && (
          <div className="">
            {allFuclty === "5xx" ? (
              <ServerErr />
            ) : (
              <div>
                {allFuclty == "NODATA" ? (
                  <NoData />
                ) : (
                  <div>
                    {allFuclty.length == 0 ? (
                      <Loader />
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
                        {allFuclty.map((item, idx) => (
                          <MentorCard item={item} key={idx} />
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Faculty