import React, { useContext, useState } from 'react'
import { CocirculerContext } from '../../../context/cocirculer';
import Markdown from 'react-markdown'
const AddEvent = () => {
    const {EventHandler} = useContext(CocirculerContext)
    const [eventName, setEventName] = useState('');
    const [thumbnail, setThumbnail]= useState();
    const [date, setDate] = useState();
    const [desp, setDesp] = useState()
    const formdata = new FormData();
    formdata.append('image',thumbnail)
    formdata.append('eventName',eventName)
    formdata.append('date',date)
    formdata.append('desp',desp)
    const handleonsubmit= (e)=>{
        e.preventDefault();
        EventHandler(formdata)
    }
  return (
    <div className='max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg'>
      <h2 className='text-2xl font-bold mb-6 text-gray-800'>Add home Event</h2>
        <form onSubmit={handleonsubmit} className='space-y-6'>
              <div>
                <label className='block text-gray-700 font-medium mb-2' >Event Name</label>
                <input 
                 onChange={(e)=>setEventName(e.target.value)}
                 value={eventName}
                 className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                type="text" />
              </div>
              <div>
                <label className='block text-gray-700 font-medium mb-2'>upload Thumbnail</label>
                <input 
                onChange={(e)=>setThumbnail(e.target.files[0])}
                // value={thumbnail}
                className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                type="file" />
              </div>
              <div>
                <label className='block text-gray-700 font-medium mb-2' >date</label>
                <input 
                onChange={(e)=> setDate(e.target.value)}
                value={date}
                className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                type="date" />
              </div>
               {/* Announcement & Markdown Preview - Grid Layout */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Announcement
                          </label>
                          <textarea
                            className="w-full mt-1 block p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            value={desp}
                            onChange={(e) => setDesp(e.target.value)}
                            rows="8"
                          />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-700 mb-1">
                            Markdown Preview
                          </div>
                          <div className="bg-green-100 border-l-4 border-green-500 p-4 rounded-lg h-full overflow-auto">
                            <Markdown  >{desp}</Markdown>
                          </div>
                        </div>
                      </div>
              
              <button className='w-full bg-blue-500 text-white p-3 rounded-lg font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'>Add event</button>
        </form>
    </div>
  )
}

export default AddEvent