import axios from 'axios'
import {toast} from 'react-toastify'
const getAllGallery = async (backendURL,setGalleryAll,cirToken) => {
   try {
       const {data} = await axios.get(backendURL+ '/api/cocirculer/gallery',{headers:{authCociculertoken:cirToken}})
       if(data.success) {
        setGalleryAll(data.data);
           toast.success(data.message);
       }
       else toast.error(data.message);
   } catch (error) {
     console.log(error);
     setGalleryAll('5xx');getAllAlumni
     toast.error(error.message);
   }
}
const AddGallery = async (backendURL,formdata,cirToken) => {
  try {
      const {data} = await axios.post(backendURL+ '/api/cocirculer/gallery/add',formdata,{headers:{authCociculertoken:cirToken}})
      if(data.success) {
        setNewsPaper(data.data);
          toast.success(data.message);
      }
      else toast.error(data.message);
  } catch (error) {
    console.log(error);
    setNewsPaper('5xx');
    toast.error(error.message);
  }
}
const deleteGallery = async (backendURL,id,cirToken) => {
    try {
        const {data} = await axios.delete(backendURL+ `/api/cocirculer/gallery/delete/${id}`,{headers:{authCociculertoken:cirToken}})
        if(data.success) {
          setNewsPaper(data.data);
            toast.success(data.message);
        }
        else toast.error(data.message);
    } catch (error) {
      console.log(error);
      setNewsPaper('5xx');
      toast.error(error.message);
    }
  }
  const updateGallery = async (backendURL,formdata,id,cirToken) => {
    try {
        const {data} = await axios.patch(backendURL+ `/api/cocirculer/gallery/update/${id}`,formdata,{headers:{authCociculertoken:cirToken}})
        if(data.success) {
         
            toast.success(data.message);
        }
        else toast.error(data.message);
    } catch (error) {
      console.log(error);
      
      toast.error(error.message);
    }
  }

const getGalleryById = async (backendURL,setGalleryById,id,cirToken ) => {
    try {
        const {data} = await axios.get(backendURL+ `/api/cocirculer/gallery/${id}`,{headers:{authCociculertoken:cirToken}})
        if(data.success) {
            setGalleryById(data.data);
            toast.success(data.message);
        }
        else toast.error(data.message);
    } catch (error) {
      console.log(error);
      setGalleryById('5xx');
      toast.error(error.message);
    }
  }
  
export {getAllGallery,AddGallery,updateGallery,deleteGallery ,getGalleryById}