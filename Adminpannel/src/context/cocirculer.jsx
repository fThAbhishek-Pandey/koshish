
import { createContext, useState } from "react";
import {AddHeader,getAllHeader,hideHeaderHeader,updateHeaderById,getHeaderById} from "../utilities/cocirculer/home/Header";
import AddMentor from "../utilities/cocirculer/member/AddMentor";
import AllMentor from "../utilities/cocirculer/member/AllMentor";
import {getMentorById,MakeTopMentorById,TerminateMentorById} from "../utilities/cocirculer/member/getMentorById";
import updateMentor from "../utilities/cocirculer/member/updateMentor";
import terminateMentor from "../utilities/cocirculer/member/terminateMentor";
import contact from "../utilities/cocirculer/contact";
import {Addevent,updateEvent,hideEvent,AllEvents,topEvent,EventsById,deleteEventById} from '../utilities/cocirculer/Events/events'
import {AddTestimorals,getAllTestimoral,updateTestimonial,getTestimonialById,hideTestimoralById} from "../utilities/cocirculer/home/Testimorals";
import {AddAnouncement,AllNews,updateNewsById,getNewsById,HideNewsbyId} from "../utilities/cocirculer/news/Anouncement";
import {getAllGallery,AddGallery,updateGallery,deleteGallery ,getGalleryById} from '../utilities/cocirculer/Gallery/gallery'
export const CocirculerContext = createContext(1);
const  CocirculerContextProvider = (props) => {
  const [cirToken , setCirToken]= useState(localStorage.getItem('cirToken'));
  const backendURL = import.meta.env.VITE_BACKEND_URL

  const [getcontact, setContact] = useState([]);
  const [getHeader, setHeader] = useState([]);
  const [HeaderById, setHeaderById] = useState({});
  const [getEvent, setEvent] = useState([]);
  const [EventById, setEventById] = useState({});
  // testimorals
  const [getTestimoral, setTestimoral] = useState([]);
  const [testimonialById, setTestimoralById] = useState({});
  // mentor
  const [getMentor, setMentor] = useState([]);
  const [MentorById, setMentorById]= useState({});
  // gallery
  const [gallaryAll, setGalleryAll] = useState([]);
  const [GalleryById, setGalleryById] = useState({});
  // 
  const [news, setNews] = useState([])
  const [newsById,setNewsById] = useState({})


  // ---------fuctions--------------
  // header 
  const HeaderHandler = (formdata)=>{
         AddHeader(backendURL, formdata, cirToken)
  }
  const handelgetHeader = ()=>{
    getAllHeader(backendURL,setHeader,cirToken )
  }
  const handelUpdateHeader = (id,formdata)=>{
    updateHeaderById(backendURL,formdata,id,cirToken )
  }
  const handelgetHeaderById = (id)=>{
    getHeaderById(backendURL,setHeaderById,id,cirToken )
  }

  const handelHideHeaderById = (id)=>{
    hideHeaderHeader(backendURL,id,cirToken )

  }



// mentor
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
// events
const EventHandler = (formdata)=>{
  Addevent(backendURL, formdata, cirToken)
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
// testimonials
const handelTestimorals = (formdata)=>{
  AddTestimorals(backendURL, formdata, cirToken)
}
const handelgetTestimoral = ()=>{
  getAllTestimoral(backendURL,setTestimoral,cirToken )
}
const handelgetTestimoralById = (id)=>{
  getTestimonialById(backendURL,setTestimoralById,id,cirToken )
}
const handelupdateTestimoralById = (id,formdata)=>{
  updateTestimonial(backendURL,formdata, id,cirToken )
}
const handelHideTestimoralById = (id)=>{
  hideTestimoralById(backendURL,id,cirToken )
}

// news
const handelUpdateNews = (id,formdata)=>{
  updateNewsById(backendURL,formdata,id,cirToken )
}
const handelgetAllNews = ()=>{
  AllNews(backendURL,setNews,cirToken )
}
const handelAnnouncement = (data)=>{
  AddAnouncement(backendURL,data,cirToken )
}
const handelgetNewsById = (id)=>{
  getNewsById(backendURL,setNewsById,id,cirToken )
}
const handelHideNewsById = (id)=>{
  HideNewsbyId(backendURL,id,cirToken )
}
// gallery


const handelGalleryAll = ()=>{
  getAllGallery(backendURL,setGalleryAll,cirToken )
}
const handelGalleryById = (id)=>{
  getGalleryById(backendURL,setGalleryById,id,cirToken )
}
const handelAddGallery = (formdata)=>{
  AddGallery(backendURL,formdata,cirToken )
}
const handelUpdateGallery = (id, formdata)=>{
  updateGallery(backendURL,formdata,id,cirToken )
}
const handelDeleteGallery = (id)=>{
  deleteGallery(backendURL,id,cirToken )
}

  const value = {
  cirToken , setCirToken,  backendURL,
  //  landpage
  
  HeaderHandler, 
  getHeader, setHeader,handelgetHeader,
  HeaderById, setHeaderById,handelgetHeaderById,
  handelUpdateHeader,handelHideHeaderById,
  
  getTestimoral, setTestimoral,handelgetTestimoral,
  testimonialById, setTestimoralById,handelgetTestimoralById,
  handelupdateTestimoralById,handelTestimorals,handelHideTestimoralById,
  //  mentor section
  getMentor, setMentor,handelgetMentor,
  MentorById, setMentorById ,handelMentorById,
  handelAddMentor, handelUpdateMentorById, handelTerminateMentor,handelTearminateMentorById,handelMakeTopMentorById,
  // announcement section
  news, setNews, handelgetAllNews,
  newsById,setNewsById,handelgetNewsById,
  handelHideNewsById,handelUpdateNews,handelAnnouncement,
  //  event section 
  getEvent, setEvent,handelgetEvent,
  EventById, setEventById,handelgetEventById,handelupdateEventById,
  handelTopEvent,handelHideEvent,
  handelDeleteEvent,EventHandler,
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