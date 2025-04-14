import React, { useState } from "react"
import Memories from "./memories"
import Newspaper from "./newpaper"
const IndexGallery = () => {
   const [tab, setTab]= useState(true)
  return (
    <div className="relative top-32 mb-32">
       <div className="flex space-x-4 border-b border-gray-300">
        <div
          onClick={() => setTab(true)}
          className="cursor-pointer px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 border-b-2 border-transparent hover:border-blue-500 transition"
        >
          Memories
        </div>
        <div
          onClick={() => setTab(false)}
          className="cursor-pointer px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 border-b-2 border-transparent hover:border-blue-500 transition"
        >
          NewsPaper
        </div>
      </div>
      {
        tab ?  <Memories /> : <Newspaper />
      }
      
    
</div>
  )
}
export default IndexGallery