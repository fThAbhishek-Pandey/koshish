import React from 'react'
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

export default AddAnouncement