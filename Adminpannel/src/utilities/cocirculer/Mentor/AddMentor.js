import axios from "axios"
import { toast } from "react-toastify"
const AddMentor = async (backendURL, formdata, cirToken) => {
   try {
        console.log(backendURL, cirToken);
        formdata.forEach((key,val)=>{
            console.log(key,"-->",val);
        })

        const {data} = await axios.post(backendURL+ '/api/cocirculer/mentor/add', formdata, {headers: {authCociculertoken: cirToken}});
        if(data.success){
            toast.success(data.message);
        }
        else toast.error(data.message);
        
    } catch (error) {
        console.log(error)
        toast.error(error.message);
    }
}

export default AddMentor