import axios from 'axios'
import {toast} from 'react-toastify'
const getNewAnnouncement = async(backendURL,setAllAnnouncement) => {
    try {
       const {data} = await axios.get(backendURL+'/api/app/announcement/new'); 
       if(data.success){
           setAllAnnouncement(data.data)
           toast.success(data.message)
       }
       else  toast.error(data.message)
    } catch (error) {
       console.log(error)
       toast.error(error.message);
    }
}
const getpastAnnouncement = async(backendURL,setAllAnnouncement) => {
    try {
       const {data} = await axios.get(backendURL+'/api/app/announcement/past'); 
       if(data.success){
           setAllAnnouncement(data.data)
           toast.success(data.message)
       }
       else  toast.error(data.message)
    } catch (error) {
       console.log(error)
       toast.error(error.message);
    }
}

export  {
    // getAllAnnouncement, 
    getNewAnnouncement,getpastAnnouncement}