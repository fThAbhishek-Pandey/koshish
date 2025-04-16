
import { createContext, useState } from "react";
export const AppContext = createContext(1);
const  AppContextProvider = (props) => {
  const hi="hi";
  const [markdown, setMarkdown] = useState('');
  const backendURL = import.meta.env.VITE_BACKEND_URL;
      console.log("coordinate context VITE_BACKEND_URL",backendURL)
const value = {
      markdown, setMarkdown,
      hi,backendURL
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