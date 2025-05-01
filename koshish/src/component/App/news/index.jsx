import React, { useState,useContext,useEffect } from 'react'
import PastAnouncement from './PastAnouncement'
import NewAnouncement from './newAnouncement'
import { AppContext } from '../../../context/App'
const Anouncement = () => {
  const [tab, setTab] = useState(0)
  const {docuTitle, setDocuTitle,} = useContext(AppContext)
    useEffect(()=>{
        setDocuTitle('News-Koshish')
    },[docuTitle])
  return (
    <div className='relative top-20 md:top-32 mb-20 md:mb-32'> 
         <div className="flex space-x-4 border-b border-gray-500">
        <div
          onClick={() => setTab(0)}
          className={`cursor-pointer px-4 py-2 text-lg font-medium  ${tab==0 ? "text-blue-600 ":"text-gray-500" } hover:text-blue-600 border-b-2 border-transparent hover:border-blue-500 transition`}
        >
          Latest
        </div>
        <div
          onClick={() => setTab(1)}
          className={`cursor-pointer px-4 py-2 text-lg font-medium  ${tab==1 ? "text-blue-600 border-blue-500":"text-gray-500" } hover:text-blue-600 border-b-2 border-transparent hover:border-blue-500  transition`}
        >
          Past
        </div>
      </div>

       {tab ==0 &&  <NewAnouncement/>}
       { tab ==1 &&  <PastAnouncement/>}
    </div>
  )
}

export default Anouncement