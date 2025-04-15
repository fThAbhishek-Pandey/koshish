import axios from "axios"
import { toast } from "react-toastify"
const AllMentor =async (backendURL, setMentor, cirToken) => {
  try {
    
    console.log("I am all mentor geting")
    const {data} = await axios.get(backendURL+ '/api/cocirculer/mentor/all', {headers: {authCociculertoken: cirToken}});
    if(data.success){
        setMentor(data.data);
        toast.success(data.message);
    }
    else toast.error(data.message);
    
} catch (error) {
    console.log(error)
    toast.error(error.message);
}
}

export default AllMentor