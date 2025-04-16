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
const getAllTestimoral = async (backendURL, setTestimoral, cirToken) => {
  try {
      console.log("backendURL", backendURL, cirToken)
     
      const {data} = await axios.get(backendURL+'/api/cocirculer/testimorals', {headers:{authCociculertoken:cirToken}} )
     if (data.success) {
          setTestimoral(data.data)
          toast.success(data.message);
     }
     else{
      toast.error(data.message);
     }
  } catch (error) {
      console.log(error)

  }
}
const updateTestimonial = async (backendURL,formdata, id,cirToken ) => {
  try {
      console.log("backendURL", backendURL, cirToken)
     
      const {data} = await axios.patch(backendURL+`/api/cocirculer/testimorals/update/${id}`,formdata, {headers:{authCociculertoken:cirToken}} )
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

const getTestimonialById = async (backendURL,setTestimoralById,id,cirToken) => {
  try {
      console.log("backendURL", backendURL, cirToken)
     
      const {data} = await axios.get(backendURL+`/api/cocirculer/testimorals/view/${id}`, {headers:{authCociculertoken:cirToken}} )
     if (data.success) {
          setTestimoralById(data.data)
          toast.success(data.message);
     }
     else{
      toast.error(data.message);
     }
  } catch (error) {
      console.log(error)

  }
}

const hideTestimoralById = async (backendURL, id, cirToken) => {
  try {
      console.log("backendURL", backendURL, cirToken)
     
      const {data} = await axios.patch(backendURL+`/api/cocirculer/testimorals/hide/${id}`,{}, {headers:{authCociculertoken:cirToken}} )
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

export  {AddTestimorals,getAllTestimoral,updateTestimonial,getTestimonialById,hideTestimoralById}