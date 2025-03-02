
import { createContext, useState } from "react";
import AddHeader from "../utilities/cocirculer/home/AddHeader";
import AddTopMentor from "../utilities/cocirculer/home/AddTopmentor";
import AddEvent from "../utilities/cocirculer/home/AddEvent";
import AddTestimorals from "../utilities/cocirculer/home/AddTestimorals";
export const CocirculerContext = createContext(1);
const  CocirculerContextProvider = (props) => {
  const [cirToken , setCirToken]= useState(localStorage.getItem('cirToken'));
  const backendURL = import.meta.env.VITE_BACKEND_URL
  console.log(".env-->",import.meta.env)
  const HeaderHandler = (formdata)=>{
         AddHeader(backendURL, formdata, cirToken)
  }
  const TopMentorHandler = (formdata)=>{
        AddTopMentor(backendURL, formdata, cirToken)
}
const EventHandler = (formdata)=>{
        AddEvent(backendURL, formdata, cirToken)
}
const handelTestimorals = (formdata)=>{
  AddTestimorals(backendURL, formdata, cirToken)
}

  const value = {
  cirToken , setCirToken, 
  handelTestimorals,
  HeaderHandler, backendURL,TopMentorHandler , EventHandler
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