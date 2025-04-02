import axios from 'axios'
import {toast} from 'react-toastify'
const getHomeEvent = async (backendURL,setHomeEvent) => {
  try {
     const {data} = await axios.get(backendURL + '/api/app/events')
     if (data.success && data.data.length !=0) {
        setHomeEvent(data.data)
        toast.success(data.message)
     }
     else if(data.data.length ==0){
      setHomeEvent('NODATA')
      toast.info(data.message)
     }
     else toast.error(data.message);
  } catch (error) {
     console.log(error);
     setHomeEvent('5xx')
    toast.error(error.message);
  }
}
const getNewEvent = async (backendURL,setHomeEvent) => {
    try {
       const {data} = await axios.get(backendURL + '/api/app/events/new')
       if (data.success) {
          setHomeEvent(data.data)
          toast.success(data.message)
       }
       else toast.error(data.message);
    } catch (error) {
       console.log(error);
       setHomeEvent('5xx')
      toast.error(error.message);
    }
  }
  const getPastEvent = async (backendURL,setHomeEvent) => {
    try {
       const {data} = await axios.get(backendURL + '/api/app/events/past')
       if (data.success) {
          setHomeEvent(data.data)
          toast.success(data.message)
       }
       else toast.error(data.message);
    } catch (error) {
       console.log(error);
       setHomeEvent('5xx')
      toast.error(error.message);
    }
  }

export { getHomeEvent,getNewEvent,getPastEvent}