import axios from "axios"
import { toast } from "react-toastify"
const AllEvents =async (backendURL, setEvent, cirToken) => {
    try {
        
        const {data} = await axios.get(backendURL+'/api/cocirculer/events/all',{headers:{authCociculertoken:cirToken}} )
       if (data.success) {
            setEvent(data.data)
            toast.success(data.message);
       }
       else{
        toast.error(data.message);
       }
    } catch (error) {
        console.log(error)

    }
}
const EventsById =async (backendURL,setEventById, id,cirToken) => {
    try {
      
      console.log("I am all mentor geting")
      const {data} = await axios.get(backendURL+ `/api/cocirculer//event/view/${id}`, {headers: {authCociculertoken: cirToken}});
      if(data.success){
          setEventById(data.data);
          toast.success(data.message);
      }
      else toast.error(data.message);
      
  } catch (error) {
      console.log(error)
      toast.error(error.message);
  }
  }
const updateEvent =async (backendURL,formdata, id,cirToken) => {
    try {
        formdata.forEach((value,key)=>{
            console.log (key ," : ", value,"\n");
     })
      console.log("I am all mentor geting",id)
      const {data} = await axios.patch(backendURL+ `/api/cocirculer/event/update/${id}`, formdata, {headers: {authCociculertoken: cirToken}});
      if(data.success){
         
          toast.success(data.message);
      }
      else toast.error(data.message);
      
  } catch (error) {
      console.log(error)
      toast.error(error.message);
  }
  }
  const hideEvent =async (backendURL, id, cirToken) => {
    try {
      
      console.log("I am all mentor geting", cirToken)
      const {data} = await axios.put(backendURL+ `/api/cocirculer/event/hide/${id}`,{}, {headers: {authCociculertoken: cirToken}});
      if(data.success){
          toast.success(data.message);
      }
      else toast.error(data.message);
      
  } catch (error) {
      console.log(error)
      toast.error(error.message);
  }
  }
  const topEvent =async (backendURL, id, cirToken) => {
    try {
      
      console.log("I am all mentor geting")
      const {data} = await axios.put(backendURL+ `/api/cocirculer/event/top/${id}`,{}, {headers: {authCociculertoken: cirToken}});
      if(data.success){
        
          toast.success(data.message);
      }
      else toast.error(data.message);
      
  } catch (error) {
      console.log(error)
      toast.error(error.message);
  }
  }
  const deleteEventById =async (backendURL, id, cirToken) => {
    try {
      
      console.log("I am all mentor geting")
      const {data} = await axios.delete(backendURL+ `/api/cocirculer/event/delete/${id}`,{headers: {authCociculertoken: cirToken}});
      if(data.success){
        
          toast.success(data.message);
      }
      else toast.error(data.message);
      
  } catch (error) {
      console.log(error)
      toast.error(error.message);
  }
  }
  const Addevent =async (backendURL, formdata, cirToken) => {
    try {
        console.log("backendURL", backendURL, cirToken)
        formdata.forEach((value,key)=>{
            console.log (key ," : ", value,"\n");
          })
        const {data} = await axios.post(backendURL+'/api/cocirculer/event/add', formdata,{headers:{authCociculertoken:cirToken}} )
       if (data.success) {
            toast.success(data.message);
       }
       else{
        toast.error(data.message);
       }
    } catch (error) {
        console.log(error)

    }
  }
export  {Addevent,updateEvent,hideEvent,AllEvents,topEvent,EventsById,deleteEventById}