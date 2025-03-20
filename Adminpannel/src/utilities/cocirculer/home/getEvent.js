import axios from 'axios';
import {toast} from 'react-toastify'
const getAllEvent = async (backendURL, setEvent, cirToken) => {
    try {
        
        const {data} = await axios.get(backendURL+'/api/cocirculer/events/all',{headers:{authCociculertoken:cirToken}} )
       if (data.success) {
            setEvent(data.data)
            toast.success(data.message);
       }
       else{
        toast.error(data.message);
       }
    } catch (error) {
        console.log(error)

    }
}

export default getAllEvent