
import { createContext, useState } from "react";

export const CoordinatorContext = createContext(1);
const  CoordinatorContextProvider = (props) => {
      const [ordiToken , setOrdiToken] = useState(false);
const value = {
         ordiToken , setOrdiToken
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