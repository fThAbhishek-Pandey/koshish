
import { createContext, useEffect, useState } from "react";
import getHeader from "../utils/App/home/getHeader";
import {getTopmentor,getCoOrdinator} from '../utils/App/home/getTopmentor'
import {getEventByID, getHomeEvent,getNewEvent,getPastEvent}  from '../utils/App/Events/getAllEvents'
import getTestimorals from "../utils/App/home/getTestimorals";
import {getAllMentor,getAllAlumni,getAllFaculty,SearchMembers} from "../utils/App/mentor/getAllMentor";
import contactus from "../utils/App/contactus";
import getmyMentor from "../utils/App/mentor/getMentor";
import {getAllMemories,getAllNews,getGalleryById} from '../utils/App/Gallery/gallary'
import { getmyAnnouncement, getNewAnnouncement,getpastAnnouncement} from "../utils/App/Announcement/getAllAnnouncement";
export const AppContext = createContext(1);
const  AppContextProvider = (props) => {
 const [docuTitle, setDocuTitle] =useState('Koshish-Welfare');
     
 useEffect(()=>{
  document.title = docuTitle
 },[docuTitle])
 const [headerData,setHeaderData ] = useState([]);
 const [TopMentor,setTopMentor ] = useState([]);
 const [coOrdi,setCoOrdi] = useState({});
 const [homeEvent, setHomeEvent] = useState([])
 const [newEvent, setNewEvent] = useState([])
 const [pastEvent, setPastEvent] = useState([])
 const [idEvent, setIdEvent] = useState({})
 const [testimorals, setTestimorals] = useState([]);
 const [allMentor, setAllMentor] = useState([]);
 const [allFuclty, setAllFuculty] = useState([]);
 const [searchMember, setSearchMember] = useState([]);
 const [allAlumni, setAllAlumni] = useState([]);
 const [myMentor, setmyMentor] = useState([]);
 const [newAnnouncement, setnewAnnouncement] = useState([]);
 const [pastAnnouncement, setPastAnnouncement] = useState([]);
 const [myAnnouncement, setmyAnnouncement] = useState({});
 const [memories, setMemories] = useState([]);
 const [newspaper, setNewsPaper] = useState([]);
 const [galleryById, setGalleryById] = useState({});
 const backendURL = import.meta.env.VITE_BACKEND_URL
const handleHeader = ()=>{
  getHeader(backendURL, setHeaderData)
}
const handleTopMentor = ()=>{
  getTopmentor(backendURL,setTopMentor)
}
const handleCoOrdinator = ()=>{
  getCoOrdinator(backendURL,setCoOrdi)
}
const handleNewEvent = ()=>{
  getNewEvent(backendURL,setNewEvent)
}
const handlePastEvent = ()=>{
 getPastEvent(backendURL,setPastEvent)
}
const handleHomeEvent = ()=>{
  getHomeEvent(backendURL,setHomeEvent)
}
const handleIDEvent = (id)=>{
  getEventByID(backendURL,setIdEvent,id)
}
const handelTestimorals =()=>{
  getTestimorals(backendURL,setTestimorals)
}
const handelgetAllMentor =()=>{
  getAllMentor(backendURL,setAllMentor)
}
const handelgetAllAlumni =()=>{
  getAllAlumni(backendURL,setAllAlumni)
}
const handelgetAllFaculty =()=>{
  getAllFaculty(backendURL,setAllFuculty)
}
const handelSearchMember =(name)=>{
  SearchMembers(backendURL,setSearchMember,name)
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
const handleMemories = ()=>{
  getAllMemories(backendURL,setMemories);
}
const handleNewsPaper = ()=>{
  getAllNews(backendURL,setNewsPaper);
}
const handleGallaryById = (id)=>{
  getGalleryById(backendURL,setGalleryById,id);
}
const value = {
      docuTitle, setDocuTitle,
      headerData,setHeaderData ,handleHeader,
      TopMentor,setTopMentor,handleTopMentor,
      coOrdi,setCoOrdi,handleCoOrdinator,
      homeEvent, setHomeEvent,handleHomeEvent,
      newEvent, setNewEvent,handleNewEvent,
      pastEvent, setPastEvent,handlePastEvent,
      idEvent, setIdEvent,handleIDEvent,
      testimorals, setTestimorals,handelTestimorals,
      allMentor, setAllMentor,handelgetAllMentor,
      handleContactus,
      allFuclty, setAllFuculty,handelgetAllFaculty,
      allAlumni, setAllAlumni,  handelgetAllAlumni,
      searchMember, setSearchMember,handelSearchMember,
      myMentor, setmyMentor,handelgetmyMentor,
      newAnnouncement, setnewAnnouncement,handleNewAnnouncement,
      pastAnnouncement, setPastAnnouncement,handlePastAnnouncement,
      myAnnouncement, setmyAnnouncement,handlemyAnnouncement,
    // gallery
    memories, setMemories,handleMemories,
    newspaper, setNewsPaper,handleNewsPaper,
    galleryById, setGalleryById,handleGallaryById,


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