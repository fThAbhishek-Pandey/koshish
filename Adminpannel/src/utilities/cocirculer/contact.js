
import axios from 'axios'
import {toast} from 'react-toastify'
const contact = async(backendURL,setContact,cirToken) => {
    try {
        const {data} = await axios.get(backendURL+ '/api/cocirculer/contact/all', {headers:{authCociculertoken: cirToken}});
        if (data.success){
            setContact(data.data);
            toast.success(data.message);
        }
        else toast.error(data.message);
    } catch (error) {
        console.log(error)
        toast.error(error.message)
    }
}

export default contact