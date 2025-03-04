import React, { useState,useContext } from 'react'
import { CocirculerContext } from '../../../context/cocirculer';
const AddMentor = () => {
      const {handelAddMentor} = useContext(CocirculerContext)
      const [name,setName] = useState('');
      const [email, setEmail] = useState('');
      const [subject,setSubject] = useState('');
      const [classTeacher, setClassTeacher] = useState('');
      const [speciality, setSpeciality] = useState('');
      const [ about, setAbout] = useState('');
      const [image , setImage] = useState('')
      const formData = new FormData();
      formData.append('name',name)
      formData.append('email',email)
      formData.append('subject',subject)
      formData.append('classTeacher',classTeacher)
      formData.append('speciality',speciality)
      formData.append('about',about)
      formData.append('image',image);
      const onsubmitHandler =(e)=>{
          e.preventDefault();
          console.log("hi i am onsubmit handler")
          handelAddMentor(formData)
      }

  return (
    <div>
        <h2>Add Mentor</h2>
        <form onSubmit={onsubmitHandler}>
        <div>
              <label >upload Mentor Image</label>
              <input 
                onChange={(e)=>setImage(e.target.files[0])}
                required
              type="file" />
            </div>
            <div>
              <label >Name</label>
              <input 
               value ={name}
                onChange={(e)=>setName(e.target.value)}
                required
              type="text" />
            </div>

            <div>
              <label >Email</label>
              <input 
               value ={email}
                onChange={(e)=>setEmail(e.target.value)}
                required
              type="text" />
            </div>
            <div>
              <label >Subject</label>
              <input 
               value ={subject}
                onChange={(e)=>setSubject(e.target.value)}
                required
              type="text" />
            </div>
            <div>
              <label >Class Teacher</label>
              <input 
               value ={classTeacher}
                onChange={(e)=>setClassTeacher(e.target.value)}
                required
              type="text" />
            </div>
            <div>
              <label >Sepecility</label>
              <input 
               value ={speciality}
                onChange={(e)=>setSpeciality(e.target.value)}
                required
              type="text" />
            </div>
            <div>
              <label >About</label>
              <textarea 
               value ={about}
                onChange={(e)=>setAbout(e.target.value)}
                required
              type="text" ></textarea > 
            </div>
            <button>Add Mentor</button>
        </form>



    </div>
  )
}

export default AddMentor