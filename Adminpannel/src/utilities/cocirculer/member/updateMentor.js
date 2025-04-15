import axios from "axios"
import { toast } from "react-toastify"
const updateMentor = async (backendURL, formdata, id, cirToken) => {
   try {
        console.log("I am Updade mentor",id)
        const {data} = await axios.patch(backendURL+ `/api/cocirculer/mentor/update/${id}`,formdata,  {headers: {authCociculertoken: cirToken}});
                 if(data.success){
                     toast.success(data.message);
                 }
                 else toast.error(data.message);
    } catch (error) {
        console.log(error)
        toast.error(error.message);
    }
}

export default updateMentor