import axios from "axios"
import { toast } from "react-toastify"
const coordinatorLogin = async (backendURL,username,password,role,setToken) => {
  try {
    
   if (role=='coordinator'){
    console.log("login coordinate", backendURL,username,password,role,setToken)

    const {data} = await axios.post(backendURL+'/api/coordinater/login', {username,password});
    if (data.success){
        toast.success(data.massage);
        setToken(data.cocirculertoken)
        localStorage.setItem('ordiToken',data.cocirculertoken)
    }
    else {
        toast.error(data.massage)
    }
}
else if(role=='cocircular') {
  console.log("login coordinate", backendURL,username,password,role,setToken)

        const {data} = await axios.post(backendURL+'/api/cocirculer/login', {username,password});
        console.log("responce data",data);
        if (data.success){
            toast.success(data.massage);
            setToken(data.cocirculertoken)
            localStorage.setItem('cirToken',data.cocirculertoken)
        }
        else {
            toast.error(data.massage)
        }
}
} catch (error) {
    console.log(error);
    toast.error(error.massage)
  }
}

export default coordinatorLogin