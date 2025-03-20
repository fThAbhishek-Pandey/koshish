import axios from 'axios';
import {toast} from 'react-toastify'
const getAllTopMentor = async (backendURL, setTopMentor, cirToken) => {
    try {
        
        const {data} = await axios.get(backendURL+'/api/cocirculer/top-mentor/all', {headers:{authCociculertoken:cirToken}} )
       if (data.success) {
            setTopMentor(data.data)
            toast.success(data.message);
       }
       else{
        toast.error(data.message);
       }
    } catch (error) {
        console.log(error)

    }
}

export default getAllTopMentor