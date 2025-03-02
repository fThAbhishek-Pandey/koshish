import axios from "axios"
import { toast } from "react-toastify"
const AddTestimorals =async (backendURL, formdata, cirToken) => {
  try {
    const {data}= await axios.post(backendURL+'/api/cocirculer/addtestimorals',formdata, {headers:{authcociculertoken :cirToken}})
    if(data.success){
        toast.success(data.message);
    }
    else {
        toast.error(data.message)
    }

} catch (error) {
     console.log(error)
     toast.error(error.message)
  }
}

export default AddTestimorals