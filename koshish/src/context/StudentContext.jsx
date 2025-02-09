
import { createContext, useState } from "react";

export const StudentContext = createContext(null);
const  StudentContextProvider = (props) => {
    const [stuToken, setStuToken] = useState(false)
const value = {
    stuToken, setStuToken
 }
return (
   
      <StudentContext.Provider value={value}>
            {props.children}
      </StudentContext.Provider>
    
  );
}
export default StudentContextProvider