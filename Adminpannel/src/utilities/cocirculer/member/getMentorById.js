import axios from "axios"
import { toast } from "react-toastify"
const getMentorById = async(backendURL, setgetMentorById,id, cirToken) => {
  try {
      const {data} = await axios.get(backendURL+ `/api/cocirculer/mentor/u/${id}`, {headers: {authCociculertoken: cirToken}});
         if(data.success){
            setgetMentorById(data.data);
             toast.success(data.message);
         }
         else toast.error(data.message);
  } catch (error) {
    console.log(error)
    toast.error(error.message);
  }
}
const TerminateMentorById = async(backendURL,id, cirToken) => {
  try {
      const {data} = await axios.patch(backendURL+ `/api/cocirculer/mentor/terminate/${id}`,{}, {headers: {authCociculertoken: cirToken}});
         if(data.success){
           
             toast.success(data.message);
         }
         else toast.error(data.message);
  } catch (error) {
    console.log(error)
    toast.error(error.message);
  }
}
const MakeTopMentorById = async(backendURL,id, cirToken) => {
  try {
      const {data} = await axios.patch(backendURL+ `/api/cocirculer/mentor/top/${id}`,{}, {headers: {authCociculertoken: cirToken}});
         if(data.success){
           
             toast.success(data.message);
         }
         else toast.error(data.message);
  } catch (error) {
    console.log(error)
    toast.error(error.message);
  }
}

export { getMentorById,MakeTopMentorById,TerminateMentorById}