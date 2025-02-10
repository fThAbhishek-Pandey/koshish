
import { createContext, useState } from "react";
export const AppContext = createContext(1);
const  AppContextProvider = (props) => {
  const hi="hi";
const value = {
      hi
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