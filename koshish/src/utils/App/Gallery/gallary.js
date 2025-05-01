import axios from 'axios'
import {toast} from 'react-toastify'
const getAllMemories = async (backendURL,setMemories) => {
   try {
       const {data} = await axios.get(backendURL+ '/api/app/memories')
       if(data.success) {
        setMemories(data.data);
           toast.success(data.message);
       }
       else toast.error(data.message);
   } catch (error) {
    //  console.log(error);
    //  setMemories('5xx');
     toast.error(error.message);
   }
}
const getAllNews = async (backendURL,setNewsPaper) => {
  try {
      const {data} = await axios.get(backendURL+ '/api/app/newspaper')
      if(data.success) {
        setNewsPaper(data.data);
          toast.success(data.message);
      }
      else toast.error(data.message);
  } catch (error) {
    // console.log(error);
    setNewsPaper('5xx');
    toast.error(error.message);
  }
}
const getGalleryById = async (backendURL,setGalleryById,id) => {
    try {
        const {data} = await axios.get(backendURL+ `/api/app/gallery/${id}`)
        if(data.success) {
            setGalleryById(data.data);
            toast.success(data.message);
        }
        else toast.error(data.message);
    } catch (error) {
      // console.log(error);
      setGalleryById('5xx');
      toast.error(error.message);
    }
  }
  
export {getAllMemories,getAllNews,getGalleryById}