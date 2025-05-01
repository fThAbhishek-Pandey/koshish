import axios from 'axios'
import {toast} from 'react-toastify'
const getNewAnnouncement = async(backendURL,setAllAnnouncement) => {
    try {
       const {data} = await axios.get(backendURL+'/api/app/announcement/new'); 
       if(data.success && data.data.length != 0){
           setAllAnnouncement(data.data)
           toast.success(data.message)
       }
       else if(data.data.length ==0) toast.info(data.message)
       else  toast.error(data.message)
    } catch (error) {
    //    console.log(error)
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
    //    console.log(error)
       toast.error(error.message);
    }
}
const getmyAnnouncement = async(backendURL,setmyAnnouncement,id) => {
    try {
       const {data} = await axios.post(backendURL+'/api/app/announcement/id',{id} ); 
       if(data.success){
           setmyAnnouncement(data.data)
           toast.success(data.message)
       }
       else  toast.error(data.message)
    } catch (error) {
    //    console.log(error)
       toast.error(error.message);
    }
}

export  {
    getmyAnnouncement, 
    getNewAnnouncement,getpastAnnouncement}