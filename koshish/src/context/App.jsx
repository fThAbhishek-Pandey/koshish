
import { createContext, useState } from "react";
import getHeader from "../utils/App/home/getHeader";
import getTopmentor from '../utils/App/home/getTopmentor'
import { getHomeEvent,getNewEvent,getPastEvent}  from '../utils/App/Events/getAllEvents'
import getTestimorals from "../utils/App/home/getTestimorals";
import getAllMentor from "../utils/App/mentor/getAllMentor";
import contactus from "../utils/App/contactus";
import getmyMentor from "../utils/App/mentor/getMentor";
import { getmyAnnouncement, getNewAnnouncement,getpastAnnouncement} from "../utils/App/Announcement/getAllAnnouncement";
export const AppContext = createContext(1);
const  AppContextProvider = (props) => {
 const [headerData,setHeaderData ] = useState([]);
 const [TopMentor,setTopMentor ] = useState([]);
 const [homeEvent, setHomeEvent] = useState([])
 const [newEvent, setNewEvent] = useState([])
 const [pastEvent, setPastEvent] = useState([])
 const [testimorals, setTestimorals] = useState([]);
 const [allMentor, setAllMentor] = useState([]);
 const [myMentor, setmyMentor] = useState([]);
 const [newAnnouncement, setnewAnnouncement] = useState([]);
 const [pastAnnouncement, setPastAnnouncement] = useState([]);
 const [myAnnouncement, setmyAnnouncement] = useState({});
 const backendURL = import.meta.env.VITE_BACKEND_URL
const handleHeader = ()=>{
  getHeader(backendURL, setHeaderData)
}
const handleTopMentor = ()=>{
  getTopmentor(backendURL,setTopMentor)
}
const handleNewEvent = ()=>{
  getNewEvent(backendURL,setHomeEvent)
}
const handlePastEvent = ()=>{
 getPastEvent(backendURL,setHomeEvent)
}
const handleHomeEvent = ()=>{
  getHomeEvent(backendURL,setHomeEvent)
}
const handelTestimorals =()=>{
  getTestimorals(backendURL,setTestimorals)
}
const handelgetAllMentor =()=>{
  getAllMentor(backendURL,setAllMentor)
}
const handelgetmyMentor =(id)=>{
   console.log("_id: ",id);
  getmyMentor(backendURL,setmyMentor,id)
}
const handleContactus = (data)=>{
  contactus(backendURL, data);
}

const handleNewAnnouncement = ()=>{
  getNewAnnouncement(backendURL,setnewAnnouncement);
}
const handlePastAnnouncement = ()=>{
  getpastAnnouncement(backendURL,setPastAnnouncement);
}
const handlemyAnnouncement = (id)=>{
  getmyAnnouncement(backendURL,setmyAnnouncement,id);
}
const value = {
      headerData,setHeaderData ,handleHeader,
      TopMentor,setTopMentor,handleTopMentor,
      homeEvent, setHomeEvent,handleHomeEvent,
      newEvent, setNewEvent,handleNewEvent,
      pastEvent, setPastEvent,handlePastEvent,
      testimorals, setTestimorals,handelTestimorals,
      allMentor, setAllMentor,handelgetAllMentor,
      handleContactus,
      myMentor, setmyMentor,handelgetmyMentor,
      newAnnouncement, setnewAnnouncement,handleNewAnnouncement,
      pastAnnouncement, setPastAnnouncement,handlePastAnnouncement,
      myAnnouncement, setmyAnnouncement,handlemyAnnouncement
 }
return (
    <>
      <AppContext.Provider value={value}>
            {props.children}
      </AppContext.Provider>
    </>
  );
}
export default AppContextProvider