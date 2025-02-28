import React, { useState, useContext } from 'react'
import { CocirculerContext } from '../../../context/cocirculer';
const Header = () => {
    const {HeaderHandler} = useContext(CocirculerContext)
    const [image, setImage] = useState('');
    const [heading, setHeading] = useState ('')
    const [para, setpara]= useState('');
    const formdata = new FormData();
    formdata.append('image',image)
    formdata.append('heading',heading)
    formdata.append('para',para)
    const onSubmitHandler =(e)=>{
        e.preventDefault();
        HeaderHandler(formdata)
    }
  return (
    <>
        <h2>Add New Header</h2>
        <form onSubmit={onSubmitHandler}>
            <div>
                <h3>Upload Image for Header</h3>
                <input 
                type="file"
                className='border-amber-400'
                onChange={(e)=> setImage(e.target.files[0])}
                // value={image}
                />
            </div>
            <div>
                <h3>Header Heading</h3>
                <input type="text"
                 className='border-amber-400'
                onChange={(e)=>setHeading(e.target.value)}
                value={heading}
                />
            </div>
            <div>
                <h3>Write Paragraph</h3>
                <textarea 
                 type="text"
                  className='border-amber-400'
                 onChange={(e)=>setpara(e.target.value)}
                 value={para}
               > </textarea>
            </div>
            <button className='border-amber-950'>Add Header</button>
        </form>
    
    
    </>
  )
}

export default Header