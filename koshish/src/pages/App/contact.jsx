import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/App';
const Contact = () => {
  const {handleContactus} = useContext(AppContext);
  const [name, setName] = useState('')
  const [email , setEmail] = useState ('');
  const [loacation, setLocation] = useState('');
  const [heading, setHeading] = useState('');
  const [para , setPara] = useState ('');
  const data = {
    name: name,
    email:email,
    loca:loacation,
    heading: heading,
    para: para
  }
  const onSubmitHandler = (e)=>{
      e.preventDefault();
      handleContactus(data);
  }
  return (
    <div>
        <h2>constact us</h2>
        <form onSubmit={onSubmitHandler}>
                <div>
                  <label >Name</label>
                  <input 
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                  type="text" />
                </div>
                <div>
                  <label >email</label>
                  <input 
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  type="email" />
                </div>
                <div>
                  <label>Location</label>
                  <input 
                  value={loacation}
                  onChange={(e)=>setLocation(e.target.value)}
                  type="text" />
                </div>
                <div>
                  <label >Heading</label>
                  <input 
                  value={heading}
                  onChange={(e)=>setHeading(e.target.value)}
                  type="text" />
                </div>
                <div>
                  <label >Paragram</label>
                  <textarea 
                  value={para}
                  onChange={(e)=>setPara(e.target.value)}
                  type="text"></textarea >
                </div>

            <button>Contact us</button>
        </form>

    </div>
  )
}

export default Contact