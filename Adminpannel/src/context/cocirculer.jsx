
import { createContext, useState } from "react";
import AddHeader from "../utilities/cocirculer/home/AddHeader";
import AddTopMentor from "../utilities/cocirculer/home/AddTopmentor";
import AddTestimorals from "../utilities/cocirculer/home/AddTestimorals";
import AddMentor from "../utilities/cocirculer/Mentor/AddMentor";
import AllMentor from "../utilities/cocirculer/Mentor/AllMentor";
import {getMentorById,MakeTopMentorById,TerminateMentorById} from "../utilities/cocirculer/Mentor/getMentorById";
import updateMentor from "../utilities/cocirculer/Mentor/updateMentor";
import terminateMentor from "../utilities/cocirculer/Mentor/terminateMentor";
import contact from "../utilities/cocirculer/contact";
import getAllHeader from "../utilities/cocirculer/home/getHeader";
import {Addevent,updateEvent,hideEvent,AllEvents,topEvent,EventsById,deleteEventById} from '../utilities/cocirculer/Events/events'
import getAllTestimoral from "../utilities/cocirculer/home/getTestimorals";
import AddAnouncement from "../utilities/cocirculer/home/AddAnouncement";
import {getAllGallery,AddGallery,updateGallery,deleteGallery ,getGalleryById} from '../utilities/cocirculer/Gallery/gallery'
export const CocirculerContext = createContext(1);
const  CocirculerContextProvider = (props) => {
  const [cirToken , setCirToken]= useState(localStorage.getItem('cirToken'));
  const [getcontact, setContact] = useState([]);
  const [getHeader, setHeader] = useState([]);
  const [getEvent, setEvent] = useState([]);
  const [EventById, setEventById] = useState({});
  const [getTestimoral, setTestimoral] = useState([]);
  const [getMentor, setMentor] = useState([]);
  const [gallaryAll, setGalleryAll] = useState([]);
  const [GalleryById, setGalleryById] = useState({});
  const [MentorById, setMentorById]= useState({});
  const backendURL = import.meta.env.VITE_BACKEND_URL
  console.log(".env-->",import.meta.env)
  const HeaderHandler = (formdata)=>{
         AddHeader(backendURL, formdata, cirToken)
  }
  const TopMentorHandler = (formdata)=>{
        AddTopMentor(backendURL, formdata, cirToken)
}
const EventHandler = (formdata)=>{
  Addevent(backendURL, formdata, cirToken)
}
const handelTestimorals = (formdata)=>{
  AddTestimorals(backendURL, formdata, cirToken)
}
const handelAddMentor = ( formdata)=>{
  AddMentor(backendURL, formdata, cirToken)
}
const handelgetMentor = ()=>{
  AllMentor(backendURL,setMentor,cirToken )
}
const handelMentorById=(id)=> {
  getMentorById(backendURL, setMentorById,id, cirToken)
}
const handelTearminateMentorById=(id)=> {
  TerminateMentorById(backendURL, id, cirToken)
}
const handelMakeTopMentorById=(id)=> {
  MakeTopMentorById(backendURL, id, cirToken)
}
const handelUpdateMentorById = (id, formdata)=>{
  console.log(id);
  updateMentor(backendURL, formdata, id, cirToken)
}
const handelTerminateMentor = (email)=>{
  terminateMentor (backendURL, email, cirToken)
}
const handelContact = ()=>{
  contact(backendURL,setContact,cirToken )
}
const handelgetHeader = ()=>{
  getAllHeader(backendURL,setHeader,cirToken )
}
const handelgetEventById = (id)=>{
  EventsById(backendURL,setEventById, id,cirToken )
}
const handelupdateEventById = (formdata, id)=>{
  updateEvent(backendURL,formdata, id,cirToken )
}
const handelTopEvent = (id)=>{
  topEvent(backendURL,id,cirToken )
}
const handelDeleteEvent = (id)=>{
  deleteEventById(backendURL,id,cirToken )
}
const handelHideEvent = (id)=>{
  hideEvent(backendURL,id,cirToken )
}
const handelgetEvent = ()=>{
  AllEvents(backendURL,setEvent,cirToken )
}
const handelgetTestimoral = ()=>{
  getAllTestimoral(backendURL,setTestimoral,cirToken )
}

const handelAnnouncement = (data)=>{
  AddAnouncement(backendURL,data,cirToken )
}
const handelGalleryAll = ()=>{
  getAllGallery(backendURL,setGalleryAll,cirToken )
}
const handelGalleryById = (id)=>{
  getGalleryById(backendURL,setGalleryById,id,cirToken )
}
const handelAddGallery = (formdata)=>{
  AddGallery(backendURL,formdata,cirToken )
}
const handelUpdateGallery = (formdata, id)=>{
  updateGallery(backendURL,formdata,id,cirToken )
}
const handelDeleteGallery = (id)=>{
  deleteGallery(backendURL,id,cirToken )
}

  const value = {
  cirToken , setCirToken,  backendURL,
  //  landpage
  handelTestimorals,HeaderHandler,TopMentorHandler , EventHandler,
  getHeader, setHeader,handelgetHeader,
  
  getTestimoral, setTestimoral,handelgetTestimoral,
  
  //  mentor section
  getMentor, setMentor,handelgetMentor,
  MentorById, setMentorById ,handelMentorById,
  handelAddMentor, handelUpdateMentorById, handelTerminateMentor,handelTearminateMentorById,handelMakeTopMentorById,
  // announcement section
  handelAnnouncement,
  //  event section 
  getEvent, setEvent,handelgetEvent,
  EventById, setEventById,handelgetEventById,handelupdateEventById,
  handelTopEvent,handelHideEvent,
  handelDeleteEvent,
  //  Gallery
  gallaryAll, setGalleryAll,handelGalleryAll,
  GalleryById, setGalleryById,handelGalleryById,
  handelAddGallery,handelUpdateGallery,handelDeleteGallery,


  //  about section
  //  contact
  getcontact, setContact,handelContact
 }
return (
    <>
      <CocirculerContext.Provider value={value}>
            {props.children}
      </CocirculerContext.Provider>
    </>
  );
}
export default CocirculerContextProvider