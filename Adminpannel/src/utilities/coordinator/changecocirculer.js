import axios from 'axios';
import { toast } from 'react-toastify'
const changecocirculer =async (backendURL,formData) => {
  try {
    console.log("backendURL",backendURL);
    console.log("formdata", formData)
    formData.forEach((value,key)=>{
        console.log (key ," : ", value,"\n");
      })
    const respose = await axios.post('http://localhost:5000' +'/api/coordinater/change-cociculer',{})
    if (respose.succes){
        toast.success(respose.message);
    }
    else {
        toast.error(respose.message);
    }
} catch (error) {
    console.log(error)
    toast.error(error.message);
  }
}
export default changecocirculer