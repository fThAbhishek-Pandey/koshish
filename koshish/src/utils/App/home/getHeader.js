import axios from 'axios'
import {toast} from 'react-toastify'
const getHeader = async(backendURL,setHeaderData ) => {
    
    try {
        const {data} = await axios(backendURL+'/api/app/header')
        if(data.success){
            setHeaderData(data.data||[]);
            // toast.success(data.message);
        }
        else toast.error("hi: ",data.message)
    } catch (error) {
        // console.log (error)
        setHeaderData('5xx');
        toast.error(data.message)
    }
}

export default getHeader