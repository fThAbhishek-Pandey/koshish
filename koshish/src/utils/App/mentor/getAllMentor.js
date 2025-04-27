import axios from 'axios'
import {toast} from 'react-toastify'
const getAllMentor = async (backendURL,setAllMentor) => {
   try {
       const {data} = await axios.get(backendURL+ '/api/app/mentor/all')
       if(data.success) {
           setAllMentor(data.data);
           toast.success(data.message);
       }
       else toast.error(data.message);
   } catch (error) {
     console.log(error);
     setAllMentor('5xx');getAllAlumni
     toast.error(error.message);
   }
}
const getAllAlumni = async (backendURL,setAllAlumni) => {
  try {
      const {data} = await axios.get(backendURL+ '/api/app/alumni/all')
      if(data.success) {
        setAllAlumni(data.data);
          toast.success(data.message);
      }
      else toast.error(data.message);
  } catch (error) {
    console.log(error);
    setAllAlumni('5xx');
    toast.error(error.message);
  }
}
const getAllFaculty = async (backendURL,setAllAlumni) => {
  try {
      const {data} = await axios.get(backendURL+ '/api/app/faculty/all')
      if(data.success) {
        setAllAlumni(data.data);
          toast.success(data.message);
      }
      else toast.error(data.message);
  } catch (error) {
    console.log(error);
    setAllAlumni('5xx');
    toast.error(error.message);
  }
}
const SearchMembers = async (backendURL,setSearchMember,name) => {
  try {
      const {data} = await axios.post(backendURL+ '/api/app/member/search',{name})
      if(data.success) {
        setSearchMember(data.data);
          toast.success(data.message);
      }
      else toast.error(data.message);
  } catch (error) {
    console.log(error);
    setSearchMember('5xx');
    toast.error(error.message);
  }
}

export {getAllMentor,getAllAlumni,getAllFaculty,SearchMembers}