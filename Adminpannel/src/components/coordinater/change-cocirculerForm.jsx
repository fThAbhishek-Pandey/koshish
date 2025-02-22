import React, { useContext, useState } from 'react'
import { CoordinatorContext } from '../../context/coordinater';
const ChangeCocirculerForm = () => {
  const {hadleChangeCocirculer}= useContext(CoordinatorContext);
    const [email, setEmail] = useState();
    const [password, setPassword]= useState();
    const [name,setName] = useState();
    const [speciality ,setSpeciality]= useState();
    const [about, setAbout]=useState();
    const [address , setAddress]= useState();
    
 const  handleform = (e)=>{
  e.preventDefault();
  try {
    
  
  const formData = new FormData()
    formData.append('email',email)
    formData.append('password',password);
    formData.append('name',name);
    formData.append('speciality',speciality)
    formData.append('about',about)
    formData.append('address',address);
    formData.forEach((value,key)=>{
      console.log (key ," : ", value,"\n");
    })
  console.log('ChangeCocirculerFormdata',formData)
  hadleChangeCocirculer(formData);
} catch (error) {
    console.log(error);
}
    }
  return (
    <div>
      <form onSubmit={ handleform}>
        <div>
          <h3>name</h3>
          <input 
          value={name}
           onChange={e=> setName(e.target.value)}
            className="border rounded px-3 py-2 border-blue-500"
            type="text" 
            placeholder="Abhishek"
            required
          />
        </div>
        <div>
          <h3>email</h3>
          <input 
          value={email}
          onChange={e=>setEmail(e.target.value)}
            className="border rounded px-3 py-2 border-blue-500"
          type="email"
          placeholder="abhishek@gamil.com"
          required
          />
        </div>
        <div>
          <h3>password</h3>
          <input 
             value={password}
             onChange={e=>setPassword(e.target.value)}
            className="border rounded px-3 py-2 border-blue-500"
          type="password" 
          placeholder="A2k2024"
          required
          />
        </div>
        <div>
          <h3>speciality</h3>
          <input 
            value={speciality}
            onChange={e=>setSpeciality(e.target.value)}
            className="border rounded px-3 py-2 border-blue-500"
          type="text"
          placeholder="B.tech"
          required
          />
        </div>
        <div>
          <h3>about</h3>
          <input 
            value={about}
            onChange={e=>setAbout(e.target.value)}
            className="border rounded px-3 py-2 border-blue-500"
          type="text"
          placeholder="about"
          required
           />
        </div>
        <div>
          <h3>adderess</h3>
          <input 
          onChange={e=> setAddress(e.target.value)}
          value={address}
            className="border rounded px-3 py-2 border-blue-500"
          type="text" 
          placeholder="my address"
          required
          />
        </div>
        <button className='bg-blue-500 text-white'>change cocirculer</button>
        </form>

    </div>
  )
}

export default ChangeCocirculerForm