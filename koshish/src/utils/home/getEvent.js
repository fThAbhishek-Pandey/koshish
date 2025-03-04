import axios from 'axios'
import {toast} from 'react-toastify'
const getHomeEvent = async (backendURL,setHomeEvent) => {
  try {
     const {data} = await axios.get(backendURL + '/api/app/events')
     if (data.success) {
        setHomeEvent(data.data)
        toast.success(data.message)
     }
     else toast.error(data.message);
  } catch (error) {
     console.log(error);
    toast.error(error.message);
  }
}

export default getHomeEvent