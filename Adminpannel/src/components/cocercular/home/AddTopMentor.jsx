import React, { useState, useContext } from 'react'
import { CocirculerContext } from '../../../context/cocirculer'
const AddTopMentor = () => {
    const {TopMentorHandler}= useContext(CocirculerContext)
    const [image, setImage] = useState()
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [speciality, setSpeciality] = useState()
    const [linkedinURL, setLinkedinURL] = useState()
    const [year, setYear]= useState()
    const formdata = new FormData()
    formdata.append('image',image)
    formdata.append('name',name)
    formdata.append('email',email)
    formdata.append('speciality',speciality)
    formdata.append('linkedinURL',linkedinURL)
    formdata.append('year',year)


const onSubmitHandler = (e)=>{
    e.preventDefault();
    TopMentorHandler(formdata)
}
  return (
    <>
     <h2>Add Top Mentor</h2>
     <form onSubmit={onSubmitHandler}>
        <div>
            <label >upload Top Mentor Image</label>
            <input 
            onChange={(e)=> setImage(e.target.files[0])}
            type="file" />
        </div>
        <div>
            <label >Name</label>
            <input 
            onChange={(e)=>setName(e.target.value)}
            value={name}
            type="text" />
        </div>
        <div>
            <label >email</label>
            <input 
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
            type="text" />
        </div>
        <div>
            <label >speciality</label>
            <input 
            onChange={(e)=>setSpeciality(e.target.value)}
            value={speciality}
            type="text" />
        </div>
        
        <div>
            <label >year</label>
            <input 
            onChange={(e)=>setYear(e.target.value)}
            value={year}
            
            type="text" />
        </div>
        <div>
            <label >Linkedin</label>
            <input 
            onChange={(e)=>setLinkedinURL(e.target.value)}
            value={linkedinURL}
            
            type="text" />
        </div>
                <button>Add TopMentor</button>
     </form>
    </>
  )
}

export default AddTopMentor