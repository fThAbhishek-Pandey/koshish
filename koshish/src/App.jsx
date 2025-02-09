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
     console.log("hi--> ", stuToken,teaToken )
     const notify = () => toast("Wow so easy!");
useEffect (()=>{
  notify ()
},[])
  return (
    <>
      {
        !(stuToken || teaToken ) 
        ? <IndexApp/>
        : <div>
          {stuToken&& <IndexStudent/>}
          {teaToken && <IndexTeacher/>}
        </div>
      }
       <ToastContainer />
    </>
  )
}

export default App
