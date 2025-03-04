import axios from 'axios'
import {toast} from 'react-toastify'
const getAllMentor = async (backendURL,setAllMentor) => {
   try {
       const {data} = await axios.get(backendURL+ '/api/app/mentor/all')
       if(data.success) {
           setAllMentor(data.data);
           toast.success(data.message);
       }
       else toast.error(data.message);
   } catch (error) {
     console.log(error);
     toast.error(error.message);
   }
}

export default getAllMentor