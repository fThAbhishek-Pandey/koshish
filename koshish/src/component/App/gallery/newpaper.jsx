import React, {useContext, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../../context/App'
const Newspaper = () => {
  const navigater = useNavigate()
  const {   newspaper, handleNewsPaper,} = useContext(AppContext)
        useEffect(()=>{
          handleNewsPaper() ;
        },[])
  return (
    <div className="p-6">
      <div className="w-full px-4 py-12">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue10 mb-6">
          Koshish in the News
          </h2>
          <p className="text-md sm:text-xl font-sm text-gray-700 leading-relaxed">
          We’re proud to have been recognized in various newspapers. Here, we’ve compiled those proud moments that mark our contribution and commitment toward social impact.
          </p>
        </div>
      </div>
      {newspaper?.length === 0 ? (
       <p className="text-center text-gray-500 text-lg font-medium py-6">
       No Newspaper found.
     </p>
     
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {newspaper.map((item) => (
             <AlbumCard item={item} />
          ))}
        </div>
      )}
    </div>

  )
}

export default Newspaper