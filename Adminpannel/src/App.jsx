import { useContext, useState } from 'react'
import IndexApp from './pages/App/IndexApp'
import Indexcocirculer from './pages/cocerculer/indexcocirculer'
import Indexcoordinator from './pages/coordinater/Indexcoordinator'
import { CocirculerContext } from './context/cocirculer'
import { CoordinatorContext } from './context/coordinater'
function App() {
     const {cirToken}= useContext( CocirculerContext);
     const {ordiToken}= useContext(CoordinatorContext);
  return (
    <>
      { 
         !( ordiToken || cirToken)
         ? <IndexApp/>
         : <div>
          { cirToken && <Indexcocirculer/>}
          { ordiToken && <Indexcoordinator/>}
         </div>
         }
    </>
  )
}

export default App
