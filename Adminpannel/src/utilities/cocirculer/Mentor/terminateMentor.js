import axios from "axios"
import { toast } from "react-toastify"
const terminateMentor = () => {
  try {
      
  } catch (error) {
      console.log(error)
      toast.error(error.message);
  }
}

export default terminateMentor