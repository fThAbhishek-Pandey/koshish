import React, { useContext, useState } from 'react'
import { CocirculerContext } from '../../../context/cocirculer';

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
    <>
        <h2>Add home Event</h2>
        <form onSubmit={handleonsubmit}>
              <div>
                <label >Event Name</label>
                <input 
                 onChange={(e)=>setEventName(e.target.value)}
                 value={eventName}
                type="text" />
              </div>
              <div>
                <label >upload Thumbnail</label>
                <input 
                onChange={(e)=>setThumbnail(e.target.files[0])}
                type="file" />
              </div>
              <div>
                <label >date</label>
                <input 
                onChange={(e)=> setDate(e.target.value)}
                value={date}
                type="text" />
              </div>
              <div>
                <label >Description</label>
                <textarea
               onChange={(e)=>setDesp(e.target.value)}
               value={desp}
              >
              </textarea>
              </div>
              <button>Add event</button>
        </form>
    </>
  )
}

export default AddEvent