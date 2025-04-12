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
const EventsById =async (backendURL, setMentor, cirToken) => {
    try {
      
      console.log("I am all mentor geting")
      const {data} = await axios.get(backendURL+ '/api/cocirculer/mentor/all', {headers: {authCociculertoken: cirToken}});
      if(data.success){
          setMentor(data.data);
          toast.success(data.message);
      }
      else toast.error(data.message);
      
  } catch (error) {
      console.log(error)
      toast.error(error.message);
  }
  }
const updateEvent =async (backendURL, setMentor, cirToken) => {
    try {
      
      console.log("I am all mentor geting")
      const {data} = await axios.get(backendURL+ '/api/cocirculer/mentor/all', {headers: {authCociculertoken: cirToken}});
      if(data.success){
          setMentor(data.data);
          toast.success(data.message);
      }
      else toast.error(data.message);
      
  } catch (error) {
      console.log(error)
      toast.error(error.message);
  }
  }
  const hideEvent =async (backendURL, setMentor, cirToken) => {
    try {
      
      console.log("I am all mentor geting")
      const {data} = await axios.get(backendURL+ '/api/cocirculer/mentor/all', {headers: {authCociculertoken: cirToken}});
      if(data.success){
          setMentor(data.data);
          toast.success(data.message);
      }
      else toast.error(data.message);
      
  } catch (error) {
      console.log(error)
      toast.error(error.message);
  }
  }
  const topEvent =async (backendURL, setMentor, cirToken) => {
    try {
      
      console.log("I am all mentor geting")
      const {data} = await axios.get(backendURL+ '/api/cocirculer/mentor/all', {headers: {authCociculertoken: cirToken}});
      if(data.success){
          setMentor(data.data);
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
export  {Addevent,updateEvent,hideEvent,AllEvents,topEvent,EventsById}