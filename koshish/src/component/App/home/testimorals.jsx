import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../context/App";
import { FaLinkedin } from "react-icons/fa6";
import Loader from "../../Loader";
import ServerErr from "../../SeverErr";

const Testimonials = () => {
  const { testimorals, handelTestimorals } = useContext(AppContext);
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    handelTestimorals();
  }, []);

  useEffect(() => {
    if (testimorals && testimorals.length !== 0) setIsLoaded(false);
  }, [testimorals]);

  return (
    <div className="pb-16 px-4">
      <h2 className="text-4xl sm:text-5xl font-bold text-blue10 text-center pt-16 pb-4">
        Testimonials
      </h2>
      <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto pb-6">
      These testimonials highlight how KOSHISH has played a transformative role in fostering personal growth, empowering education, and uplifting communities through meaningful support and opportunities.
      </p>

      {isLoaded ? (
        <Loader />
      ) : testimorals === "5xx" ? (
        <ServerErr />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimorals.slice(-3).map((item, idx) => (
            <div
              key={idx}
              className="group bg-green-50 border border-gray-200 shadow-md rounded-xl p-6 transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover shadow-md group-hover:scale-105 transition-transform duration-300"
                />
                <div className="text-center sm:text-left w-full">
                  <div className="flex items-center justify-center sm:justify-start gap-2 font-bold text-xl text-blue10">
                    {item.name}
                    {item.linkedin !== "NAN" && (
                      <a
                        href={item.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <FaLinkedin />
                      </a>
                    )}
                  </div>
                  <div className="text-gray-700 text-base italic mt-1">
                    {item.headline}
                  </div>
                </div>
              </div>
              <div className="mt-4 text-gray-600 text-sm bg-white p-4 rounded-lg border-l-4 border-blue-500 shadow-sm">
                {item.about}
              </div>
            </div>
          ))}
        </div>
      )}

      {console.log("testimorals", testimorals)}
    </div>
  );
};

export default Testimonials;
