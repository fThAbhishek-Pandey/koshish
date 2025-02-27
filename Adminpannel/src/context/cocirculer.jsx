
import { createContext, useState } from "react";
import AddHeader from "../utilities/cocirculer/home/AddHeader";
export const CocirculerContext = createContext(1);
const  CocirculerContextProvider = (props) => {
  const [cirToken , setCirToken]= useState(localStorage.getItem('cirToken')|| true);
  const backendURL = import.meta.env.VITE_BACKEND_URL
  const HeaderHandler = (formdata)=>{
         AddHeader(backendURL, formdata, cirToken)
  }
  const value = {
  cirToken , setCirToken, HeaderHandler, backendURL 
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