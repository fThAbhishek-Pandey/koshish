
import { createContext, useState } from "react";
import getHeader from "../utils/getHeader";
import getTopmentor from '../utils/getTopmentor'
import getHomeEvent from "../utils/getEvent";
import getTestimorals from "../utils/getTestimorals";
export const AppContext = createContext(1);
const  AppContextProvider = (props) => {
 const [headerData,setHeaderData ] = useState([]);
 const [TopMentor,setTopMentor ] = useState([]);
 const [homeEvent, setHomeEvent] = useState([])
 const [testimorals, setTestimorals] = useState([]);
 const backendURL = import.meta.env.VITE_BACKEND_URL
const handleHeader = ()=>{
  getHeader(backendURL, setHeaderData)
}
const handleTopMentor = ()=>{
  getTopmentor(backendURL,setTopMentor)
}
const handleHomeEvent = ()=>{
  getHomeEvent(backendURL,setHomeEvent)
}
const handelTestimorals =()=>{
  getTestimorals(backendURL,setTestimorals)
}
const value = {
      headerData,setHeaderData ,handleHeader,
      TopMentor,setTopMentor,handleTopMentor,
      homeEvent, setHomeEvent,handleHomeEvent,
      testimorals, setTestimorals,handelTestimorals
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