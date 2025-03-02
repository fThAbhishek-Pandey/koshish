
import { createContext, useState } from "react";
import changecocirculer from "../utilities/coordinator/changecocirculer";
export const CoordinatorContext = createContext(1);
const  CoordinatorContextProvider = (props) => {
      const [ordiToken , setOrdiToken] = useState(localStorage.getItem('ordiToken') ||false);
      const backendURL = import.meta.env.VITE_BACKEND_URL;
      console.log("coordinate context VITE_BACKEND_URL",backendURL)
      const hadleChangeCocirculer= async(formData)=>{
        console.log("coordinate context VITE_BACKEND_URL",backendURL)
        await changecocirculer(backendURL,formData,ordiToken);
      }
const value = {
         ordiToken , setOrdiToken,hadleChangeCocirculer
 }
return (
    <>
      <CoordinatorContext.Provider value={value}>
            {props.children}
      </CoordinatorContext.Provider>
    </>
  );
}
export default CoordinatorContextProvider