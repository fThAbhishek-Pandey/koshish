
import axios from 'axios'
import {toast} from 'react-toastify'
const getmyMentor = async (backendURL,setmyMentor,id) => {
  try {
         console.log(backendURL,id)
         const {data} = await axios.post(backendURL+ '/api/app/mentor/my', {id})
                if(data.success) {
                  setmyMentor(data.data);
                    toast.success(data.message);
                }
                else toast.error(data.message);
     } catch (error) {
       console.log(error);
       setmyMentor('5xx');
       toast.error(error.message);
     }
}

export default getmyMentor