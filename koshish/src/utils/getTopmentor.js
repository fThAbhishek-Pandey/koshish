import axios from 'axios'
import {toast} from 'react-toastify'
const getTopmentor = async (backendURL,setTopMentor) => {
  try {
     const {data} = await axios.get(backendURL + '/api/app/top-mentor')
     if (data.success) {
        setTopMentor(data.data)
        toast.success(data.message)
     }
     else toast.error(data.message);
  } catch (error) {
     console.log(error);
    toast.error(error.message);
  }
}

export default getTopmentor