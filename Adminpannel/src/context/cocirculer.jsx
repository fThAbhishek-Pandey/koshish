
import { createContext, useState } from "react";
import AddHeader from "../utilities/cocirculer/home/AddHeader";
import AddTopMentor from "../utilities/cocirculer/home/AddTopmentor";
import AddEvent from "../utilities/cocirculer/home/AddEvent";
import AddTestimorals from "../utilities/cocirculer/home/AddTestimorals";
import AddMentor from "../utilities/cocirculer/Mentor/AddMentor";
import AllMentor from "../utilities/cocirculer/Mentor/AllMentor";
import updateMentor from "../utilities/cocirculer/Mentor/updateMentor";
import terminateMentor from "../utilities/cocirculer/Mentor/terminateMentor";
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
const handelAddMentor = ( formdata)=>{
  AddMentor(backendURL, formdata, cirToken)
}
const handelAllMentor = ()=>{
  AllMentor(backendURL,  cirToken)
}
const handelUpdateMentor = ( formdata)=>{
  updateMentor(backendURL, formdata, cirToken)
}
const handelTerminateMentor = (email)=>{
  terminateMentor (backendURL, email, cirToken)
}
  const value = {
  cirToken , setCirToken,  backendURL,
  //  landpage
  handelTestimorals,HeaderHandler,TopMentorHandler , EventHandler,
  //  mentor section
  handelAddMentor,handelAllMentor, handelUpdateMentor, handelTerminateMentor,
  // announcement section

  //  about section
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