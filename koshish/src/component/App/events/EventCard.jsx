import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const EventCard = ({ event }) => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState("");
  const now = new Date();
  const start = new Date(event.startdate);
  const end = new Date(event.endDate);

  const isLive = now >= start && now <= end;
  const isUpcoming = now < start;

  useEffect(() => {
    const interval = setInterval(() => {
      const targetDate = isUpcoming ? start : end;
      const diff = targetDate - new Date();

      if (diff <= 0) {
        setTimeLeft("00d 00h 00m 00s");
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft(
        `${String(days).padStart(2, "0")}d ${String(hours).padStart(
          2,
          "0"
        )}h ${String(minutes).padStart(2, "0")}m ${String(seconds).padStart(
          2,
          "0"
        )}s`
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [event]);

  return (
    <div className="bg-green-100 rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-4 max-w-sm w-full sm:w-[90%] md:w-[22rem]">
      {/* Thumbnail */}
      <img
        onClick={() => navigate(`/events/${event._id}`)}
        src={event.thumbnail}
        alt={event.name}
        className="w-full h-48 object-cover rounded-xl cursor-pointer transition duration-200 hover:opacity-90"
      />

      {/* Content */}
      <div className="mt-4 space-y-3">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <h2 className="text-2xl font-bold text-gray-800">{event.name}</h2>
          <span
            className={`text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap ${
              event.registrationOpen
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {event.registrationOpen ? "Registration Open" : "Registration Closed"}
          </span>
        </div>

        {/* Live Status */}
        {isLive && (
          <div className="flex items-center gap-1 text-sm font-semibold text-green-600">
            <span className="animate-pulse text-lg">🔴</span> Live Now
          </div>
        )}

        {/* Date Range */}
        <p className="text-gray-500 text-sm">
          📅 {start.toLocaleDateString()} → {end.toLocaleDateString()}
        </p>

        {/* Timer */}
        {isLive ? (
          <p className="text-green-600 font-medium text-sm">⏳ Ends in: {timeLeft}</p>
        ) : isUpcoming ? (
          <p className="text-blue-600 font-medium text-sm">⏰ Starts in: {timeLeft}</p>
        ) : (
          <p className="text-gray-500 font-medium text-sm">✅ Event Ended</p>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 text-sm">
          {event.team && (
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
              👥 Team Event
            </span>
          )}
          {event.isCertification && (
            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
              📄 Certificate
            </span>
          )}
          {event.mode && (
            <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full">
              🖥️ Online
            </span>
          )}
          {event.isPrize && (
            <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
              🏆 Prize
            </span>
          )}
        </div>

        {/* Button */}
        <button
          onClick={() => navigate(`/events/${event._id}`)}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm py-2 rounded-lg transition duration-200"
        >
          🔍 View Event
        </button>
      </div>
    </div>
  );
};

export default EventCard;
