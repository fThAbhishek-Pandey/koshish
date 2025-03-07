import axios from "axios"
import { toast } from "react-toastify"
const contactus = async (backendURL, mydata) => {
  try {
      const {data} = await axios.post (backendURL +'/api/app/contact', mydata);
      if (data.success) {
          toast.success(data.message);
      }
      else toast.error(data.message)
  } catch (error) {
     console.log(error);
     toast.error(error.message);
  }
}

export default contactus