import axios from 'axios'
import {toast} from 'react-toastify'
const getHeader = async(backendURL,setHeaderData ) => {
    try {
        const {data} = await axios(backendURL+'/api/app/header')
        console.log(data)
        if(data.success){
         
            console.log('axios', data)
            setHeaderData(data.data);
            toast.success(data.message);
        }
        else toast.error(data.message)
    } catch (error) {
        console.log (error)
        toast.error(data.message)
    }
}

export default getHeader