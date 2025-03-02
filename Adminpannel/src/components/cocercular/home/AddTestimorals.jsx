import React, { useState, useContext } from 'react'
import { CocirculerContext } from '../../../context/cocirculer'
const AddTestimorals = () => {
    const {handelTestimorals} = useContext(CocirculerContext)
     const [name,setName] = useState('')
     const [headline, setHeadline] = useState('')
     const [quote, setQuote] = useState('')
     const [linkedin, setLinkedin] = useState('')
     const [image, setImage] = useState('');
     const formData = new FormData();
     formData.append('image',image)
     formData.append('name',name)
     formData.append('headline',headline)
     formData.append('linkedin',linkedin)
     formData.append('quote', quote)
  const onsubmitHandler =(e)=>{
            e.preventDefault()
            handelTestimorals(formData);
   }

  return (
    <div>
        <h2>Add Testimorals</h2>
        <form onSubmit={onsubmitHandler}>
            <div>
                <label >Name</label>
                <input 
                value={name}
                onChange={(e)=> setName(e.target.value)}
                type="test" />
            </div>
            <div>
                <label >Upload Image</label>
                <input 
                // value={image}
                onChange={(e)=> setImage(e.target.files[0])}
                type="file" />
            </div>
            <div>
                <label className={"bg-blue00"} >HeadLine</label>
                <input 
                value={headline}
                onChange={(e)=> setHeadline(e.target.value)}
                type="test" />
            </div>
            <div>
                <label >linkedin</label>
                <input 
                value={linkedin}
                onChange={(e)=> setLinkedin(e.target.value)}
                type="text" />
            </div>
            <div>
                <label >quote</label>
                <textarea 
                value={quote}
                onChange={(e)=> setQuote(e.target.value)}
                >

                </textarea >
            </div>

            <button>Add Testimorals</button>


        </form>

    </div>
  )
}

export default AddTestimorals