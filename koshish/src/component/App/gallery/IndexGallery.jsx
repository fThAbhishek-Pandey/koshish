import React, { useState,useContext,useEffect } from "react"
import Memories from "./memories"
import Newspaper from "./newpaper"
import { AppContext } from "../../../context/App"
const IndexGallery = () => {
   const [tab, setTab]= useState(0)
   const {docuTitle, setDocuTitle,} = useContext(AppContext)
      useEffect(()=>{
          setDocuTitle('Gallery-Koshish')
      },[docuTitle])
  return (
    <div className="relative top-32 mb-32">
       <div className="flex space-x-4 border-b border-gray-300">
        <div
          onClick={() => setTab(0)}
          className={`cursor-pointer px-4 py-2 text-lg font-medium  ${tab==0 ? "text-blue-600 ":"text-gray-500" } hover:text-blue-600 border-b-2 border-transparent hover:border-blue-500 transition`}
        >
          Memories
        </div>
        <div
          onClick={() => setTab(1)}
          className={`cursor-pointer px-4 py-2 text-lg font-medium  ${tab==1 ? "text-blue-600 ":"text-gray-500" } hover:text-blue-600 border-b-2 border-transparent hover:border-blue-500 transition`}
        >
          NewsPaper
        </div>
      </div>
      {
        tab==0 ?  <Memories /> : <Newspaper />
      }
      
    
</div>
  )
}
export default IndexGallery