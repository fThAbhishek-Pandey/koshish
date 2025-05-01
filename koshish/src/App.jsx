import { useState, useContext ,useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import IndexApp from './pages/App'
import IndexStudent from './pages/student'
import IndexTeacher from './pages/teachers'
import { StudentContext } from './context/StudentContext'
import { TeacherContext } from './context/TeacherContext'
function App() {
    const {stuToken}= useContext(StudentContext);
    const {teaToken}= useContext(TeacherContext);

 useEffect(() => {
  const onLoad = () => {
    console.log("Page fully loaded");
  };

  window.addEventListener("load", onLoad);

  return () => {
    window.removeEventListener("load", onLoad);
  };
}, []);

  return (
    <>
     { 
     <div>
     {
        !(stuToken || teaToken ) 
        ? <IndexApp/>
        : <div>
          {stuToken&& <IndexStudent/>}
          {teaToken && <IndexTeacher/>}
        </div>
      }
       <ToastContainer />
       </div>
       }
       
    </>
  )
}

export default App
