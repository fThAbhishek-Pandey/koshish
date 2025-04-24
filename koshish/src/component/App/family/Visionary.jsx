import React, { useContext, useEffect } from "react";
import { AppContext } from "../../../context/App";
import MentorCard from "./MentorCard";
import ServerErr from "../../SeverErr";
import NoData from "../../NoData";
import Loader from "../../Loader";
import { useNavigate } from "react-router-dom";
const Faculty = () => {
  const { allFuclty, setAllFuculty, handelgetAllFaculty } =
    useContext(AppContext);
  const navigate = useNavigate();
  useEffect(() => {
    handelgetAllFaculty();
  }, []);
  return (
    <div className="md:mb-32 py-6 sm:px-6 lg:px-8 mb-24 text-center ">
      <div className="w-full px-4 py-12">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue10 mb-6">
            Meet Our Visionaries
          </h2>
          <p className="text-md sm:text-xl font-sm text-gray-700 leading-relaxed">
          These are the minds who once dreamed of creating a better society — a dream that lives today through KOSHISH.
          Their unwavering support has turned that vision into a thriving reality for the betterment of countless students.
          </p>
        </div>
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
  );
};

export default Faculty;
