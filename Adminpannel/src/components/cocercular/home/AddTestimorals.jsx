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
    <div className='max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg'>
        <h2 className='text-2xl font-bold mb-6 text-gray-800'>Add Testimorals</h2>
        <form onSubmit={onsubmitHandler} className='space-y-6'>
            <div>
                <label className="block text-gray-700 font-medium mb-2">Name</label>
                <input 
                value={name}
                className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                onChange={(e)=> setName(e.target.value)}
                type="test" />
            </div>
            <div>
                <label className='block text-gray-700 font-medium mb-2' >Upload Image</label>
                <input 
                // value={image}
                className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                onChange={(e)=> setImage(e.target.files[0])}
                type="file" />
            </div>
            <div>
                <label className="block text-gray-700 font-medium mb-2">Headline</label>
                <input 
                value={headline}
                className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                onChange={(e)=> setHeadline(e.target.value)}
                type="test" />
            </div>
            <div>
                <label className='block text-gray-700 font-medium mb-2'>linkedin</label>
                <input 
                value={linkedin}
                className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                onChange={(e)=> setLinkedin(e.target.value)}
                type="text" />
            </div>
            <div>
                <label className='block text-gray-700 font-medium mb-2' >quote</label>
                <textarea 
                value={quote}
                className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                onChange={(e)=> setQuote(e.target.value)}
                ></textarea>
            </div>

            <button className='w-full bg-blue-500 text-white p-3 rounded-lg font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'>Add Testimorals</button>


        </form>

    </div>
  )
}

export default AddTestimorals