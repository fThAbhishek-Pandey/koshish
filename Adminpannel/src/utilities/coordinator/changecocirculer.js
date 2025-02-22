import axios from 'axios';
import { toast } from 'react-toastify'
const changecocirculer =async (backendURL,formData,ordiToken) => {
  try {
    console.log("backendURL",backendURL);
    console.log("formdata", formData)
    formData.forEach((value,key)=>{
        console.log (key ," : ", value,"\n");
      })
      const config = { headers: {'Content-Type': 'multipart/form-data',authcooditoken:ordiToken }}
    const {data} = await axios.post('http://localhost:5000' +'/api/upload/coordinater/change-cociculer',formData,config)
    console.log(data);
    if (data.success){
        toast.success(data.message);
    }
    else {
        toast.error(data.message);
    }
} catch (error) {
    console.log(error)
    toast.error(error.message);
  }
}
export default changecocirculer