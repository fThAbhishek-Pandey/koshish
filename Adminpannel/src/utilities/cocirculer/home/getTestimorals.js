import axios from 'axios';
import {toast} from 'react-toastify'
const getAllTestimoral = async (backendURL, setTestimoral, cirToken) => {
    try {
        console.log("backendURL", backendURL, cirToken)
       
        const {data} = await axios.get(backendURL+'/api/cocirculer/testimorals/all', {headers:{authCociculertoken:cirToken}} )
       if (data.success) {
            setTestimoral(data.data)
            toast.success(data.message);
       }
       else{
        toast.error(data.message);
       }
    } catch (error) {
        console.log(error)

    }
}

export default getAllTestimoral