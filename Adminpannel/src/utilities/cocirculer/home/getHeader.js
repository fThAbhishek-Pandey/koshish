import axios from 'axios';
import {toast} from 'react-toastify'
const getAllHeader = async (backendURL, setHeader, cirToken) => {
    try {
        
        const {data} = await axios.get(backendURL+'/api/cocirculer/header/all',{headers:{authCociculertoken:cirToken}} )
       if (data.success) {
            setHeader(data.data)
            toast.success(data.message);
       }
       else{
        toast.error(data.message);
       }
    } catch (error) {
        console.log(error)

    }
}

export default getAllHeader