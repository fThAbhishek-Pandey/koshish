import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../../context/App";
import Markdown from "react-markdown";

const Myevent = () => {
  const { id } = useParams();
  const {docuTitle, setDocuTitle, idEvent, handleIDEvent } = useContext(AppContext);

  useEffect(() => {
    handleIDEvent(id);
  }, [id]);
  useEffect(()=>{
      setDocuTitle(`${idEvent.name}-Koshish`)
  },[docuTitle,id, idEvent])
  if (!idEvent) {
    return (
      <div className="flex items-center  justify-center min-h-[40vh]">
        <p className="text-gray-500 text-lg animate-pulse">
          Loading event details...
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center px-4 py-10 bg-gradient-to-b from-green-50 to-green-100 min-h-screen relative top-16 md:to-32">
      <div className="w-full max-w-5xl bg-green-100 rounded-2xl shadow-xl overflow-hidden border border-gray-200">
        {/* Banner */}
        <div className="relative">
          <img
            src={idEvent.thumbnail}
            alt={idEvent.name}
            className="w-full h-64 sm:h-72 md:h-80 object-cover"
          />
          {idEvent.mode && (
            <span className="absolute top-4 left-4 bg-purple-700 text-white text-xs sm:text-sm font-semibold px-3 py-1 rounded shadow-md">
              {idEvent.mode ? <div>Online</div> : <div>Offline</div>}
            </span>
          )}
          {idEvent.isActive && (
            <span className="absolute top-4 right-4 bg-red-600 text-white text-xs sm:text-sm font-semibold px-3 py-1 rounded shadow-md animate-pulse">
              🔴 LIVE
            </span>
          )}
        </div>

        {/* Event Details */}
        <div className="p-6 md:p-8">
          <h1 className="text-center text-2xl sm:text-3xl md:5xl font-bold text-blue10 mb-4">
            {idEvent.name}
          </h1>

          <div className="flex flex-wrap justify-center gap-4 text-sm sm:text-base text-gray-600 mb-4">
            <p>
              <span className="font-medium text-gray-700">Starts:</span>{" "}
              {new Date(idEvent.startdate).toLocaleString("en-IN", {
                timeZone: "Asia/Kolkata",
              })}
            </p>
            <p>
              <span className="font-medium text-gray-700">Ends:</span>{" "}
              {new Date(idEvent.endDate).toLocaleString("en-IN", {
                timeZone: "Asia/Kolkata",
              })}
            </p>
            <p>
              <span className="font-medium text-gray-700">Mode:</span>{" "}
              {idEvent.mode ? "Online" : "Offline"}
            </p>
          </div>

          {/* Description */}
          <div className="prose max-w-none text-gray-800 mb-6">
            <Markdown>{idEvent.desc}</Markdown>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {idEvent.team ? (
              <span className="bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">
                👥 Team Event
              </span>
            )
            :(
              <span className="bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">
                👥 Solo
              </span>
            )
            
            }
            {idEvent.isCertification && (
              <span className="bg-purple-100 text-purple-700 text-xs font-medium px-3 py-1 rounded-full">
                📄 Certificate Provided
              </span>
            )}
            {idEvent.isPrize && (
              <span className="bg-yellow-100 text-yellow-700 text-xs font-medium px-3 py-1 rounded-full">
                🏆 Prizes Available
              </span>
            )}
            {idEvent.isTop && (
              <span className="bg-pink-100 text-pink-700 text-xs font-medium px-3 py-1 rounded-full">
                ⭐ Top Event
              </span>
            )}
            {idEvent.teamSize && (
              <span className="bg-teal-100 text-teal-700 text-xs font-medium px-3 py-1 rounded-full">
                Team Size: {idEvent.teamSize}
              </span>
            )}
          </div>

          {/* Prizes (if available) */}
          {/* Description */}
          {idEvent.prize && (
            <div className="prose max-w-none text-gray-800 mb-6">
              {idEvent.prize.PrizeHeading}
            </div>
          )}

          {idEvent.prize && (
            <div className="prose max-w-none text-gray-800 mb-6">
              <Markdown>{idEvent.prize.para}</Markdown>
            </div>
          )}
          {idEvent.prize && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                {idEvent.prize.PrizeHeading}
              </h3>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>🥇 1st Prize: ₹{idEvent.prize.IstPrize}</li>
                <li>🥈 2nd Prize: ₹{idEvent.prize.IIndPrize}</li>
                <li>🥉 3rd Prize: ₹{idEvent.prize.IIIrdPrize}</li>
              </ul>
            </div>
          )}

          {/* Participants */}
          {idEvent.participants && (
            <p className="text-center text-gray-600 text-sm mb-4">
              👤 <span className="font-medium">{idEvent.participants}</span>{" "}
              Registered
            </p>
          )}

          {/* Register Button */}
          {idEvent.registrationOpen ? (
            <div className="text-center">
              <button
                onClick={() => alert("Registration logic goes here")}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-lg shadow transition duration-200"
              >
                Register Now
              </button>
            </div>
          ) : (
            <p className="text-center text-red-500 text-sm font-medium mt-4">
              Registration is closed.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Myevent;
