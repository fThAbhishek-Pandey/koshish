import axios from "axios"
import { toast } from "react-toastify"
const getTestimorals = async (backendURL,setTestimorals) => {
      try {
         const {data} = await axios.get(backendURL +'/api/app/testimorals' )
         if (data.success){
            setTestimorals(data.data)
            toast.success(data.message);
         }
         else{
            toast.error(data.message);
         }
      } catch (error) {
         console.log(error)
         toast.error(error.message);
      }
}

export default getTestimorals