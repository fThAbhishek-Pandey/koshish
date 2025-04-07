import { useNavigate } from "react-router-dom";
const EventCard = ({ event }) => {
    const navigate = useNavigate()
    return (
      <div className="bg-white rounded-2xl shadow-lg p-4 max-w-sm w-full sm:w-[90%] md:w-[22rem] transition hover:scale-[1.01] duration-300">
  <img
    onClick={() => navigate(`/events/${event._id}`)}
    src={event.thumbnail}
    alt={event.name}
    className="w-full h-40 sm:h-48 md:h-52 object-cover rounded-xl cursor-pointer"
  />
  <div className="mt-4">
    <h2 className="text-lg sm:text-xl font-bold text-gray-800">{event.name}</h2>
    <p className="text-sm sm:text-base text-gray-600">{new Date(event.date).toDateString()}</p>
    
  </div>
</div>

    );
  };
  export default EventCard