import axios from 'axios';
import {toast} from 'react-toastify'
const AddHeader = async (backendURL, formdata, cirToken) => {
    try {
        const {data} = await axios.post(backendURL+'/add-header', formdata,{headers:{cirtoken:cirToken}} )
       if (data.success) {
            toast.success(data.message);
       }
       else{
        toast.error(data.message);
       }
    } catch (error) {
        console.log(error)

    }
}

export default AddHeader