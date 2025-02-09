
import { createContext, useState } from "react";

export const TeacherContext = createContext(null);


const  TeacherContextProvider = (props) => {
    const [teaToken, setTeaToken]= useState(false);
const value = {
    teaToken, setTeaToken
 }
return (
    
      <TeacherContext.Provider value={value}>
            {props.children}
      </TeacherContext.Provider>
  
  );
}
export default TeacherContextProvider