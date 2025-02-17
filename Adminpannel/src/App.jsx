import { useContext, useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import Indexcocirculer from './pages/cocerculer/indexcocirculer'
import Indexcoordinator from './pages/coordinater/Indexcoordinator'
import { CocirculerContext } from './context/cocirculer'
import { CoordinatorContext } from './context/coordinater'
import Login from './components/login'
function App() {
     const {cirToken}= useContext( CocirculerContext);
     const {ordiToken}= useContext(CoordinatorContext);
     const notify = () => toast("Wow so easy!");
     useEffect (()=>{
       notify ()
     },[])
  return (
    <>
      { 
         !( ordiToken || cirToken)
         ? <Login/>
         : <div>
          { cirToken && <Indexcocirculer/>}
          { ordiToken && <Indexcoordinator/>}
         </div>
         }
         <ToastContainer/>
    </>
  )
}

export default App
