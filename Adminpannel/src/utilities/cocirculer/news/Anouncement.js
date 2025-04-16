
import axios from 'axios'
import {toast} from 'react-toastify'
const AddAnouncement = async (backendURL, formdata, cirToken) => {
  try {
      const {data} = await axios.post(backendURL+ '/api/cocirculer/announcement/add',formdata ,{headers:{authCociculertoken:cirToken}})
      if (data.success){
          toast.success(data.message);
      }
      else {
         toast.error(data.message)
      }
  } catch (error) {
    toast.error(error.message);
  }
}
const AllNews = async (backendURL,setNews,cirToken) => {
  try {
      const {data} = await axios.get(backendURL+ '/api/cocirculer/announcement/',{headers:{authCociculertoken:cirToken}})
      if (data.success){
          setNews(data.data)
          toast.success(data.message);
      }
      else {
         toast.error(data.message)
      }
  } catch (error) {
    toast.error(error.message);
  }
}
const updateNewsById = async (backendURL,formdata,id,cirToken) => {
  try {
       formdata.forEach((key, value) => {
          console.log(key,"  ", value)
       });
      const {data} = await axios.patch(backendURL+ `/api/cocirculer/announcement/update/${id}`,formdata ,{headers:{authCociculertoken:cirToken}})
      if (data.success){
          toast.success(data.message);
      }
      else {
         toast.error(data.message)
      }
  } catch (error) {
    toast.error(error.message);
  }
}
const getNewsById = async (backendURL,setNewsById,id,cirToken ) => {
  try {
      const {data} = await axios.get(backendURL+ `/api/cocirculer/announcement/view/${id}`,{headers:{authCociculertoken:cirToken}})
      if (data.success){
          setNewsById(data.data)
          toast.success(data.message);
      }
      else {
         toast.error(data.message)
      }
  } catch (error) {
    toast.error(error.message);
  }
}
const HideNewsbyId = async (backendURL,id,cirToken) => {
  try {
      const {data} = await axios.patch(backendURL+ `/api/cocirculer/announcement/hide/${id}`,formdata ,{headers:{authCociculertoken:cirToken}})
      if (data.success){
          toast.success(data.message);
      }
      else {
         toast.error(data.message)
      }
  } catch (error) {
    toast.error(error.message);
  }
}

export { AddAnouncement,AllNews,updateNewsById,getNewsById,HideNewsbyId}