import axios from 'axios'
import {toast} from 'react-toastify'
const getTopmentor = async (backendURL,setTopMentor) => {
  try {
     const {data} = await axios.get(backendURL + '/api/app/top-mentor')
     if (data.success) {
        setTopMentor(data.data)
      //   toast.success(data.message)
     }
     else toast.error(data.message);
  } catch (error) {
   //   console.log(error);
     setTopMentor('5xx')
    toast.error(error.message);
  }
}
const getCoOrdinator = async (backendURL,setCoOrdi) => {
   try {
      const {data} = await axios.get(backendURL + '/api/app/coordi')
      if (data.success) {
         setCoOrdi(data.data)
         // toast.success(data.message)
      }
      else toast.error(data.message);
   } catch (error) {
      // console.log(error);
      setCoOrdi('5xx')
     toast.error(error.message);
   }
 }

export  {getTopmentor,getCoOrdinator}