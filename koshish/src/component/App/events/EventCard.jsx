import { useNavigate } from "react-router-dom";
const EventCard = ({ event }) => {
    const navigate = useNavigate()
    return (
      <div className="bg-white rounded-2xl shadow-lg p-4 max-w-sm">
        <img
          onClick={()=>navigate(`/events/${event._id}`)}
          src={event.thumbnail}
          alt={event.name}
          className="w-full h-40 object-cover rounded-xl"
        />
        <div className="mt-4">
          <h2 className="text-xl font-bold text-gray-800">{event.name}</h2>
          <p className="text-gray-600">{new Date(event.date).toDateString()}</p>
          <p className="mt-2 text-gray-700">{event.desc}</p>
        </div>
      </div>
    );
  };
  export default EventCard