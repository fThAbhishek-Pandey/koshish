import React from 'react'
import CultureImg from '../../../assets/cultue.png'
const Culture = () => {
  return (
    <div className="bg-white flex flex-col-reverse sm:flex-col-reverse md:flex-row lg:flex-row justify-around ">
     
       <div className='bg-green-50  p-5  md:w-[60%]'>
       <h2 className='text-2xl p-5 m-2 text-blue10 font-bold'>The Koshish Mantra</h2>
       <div className='text-sm  md:text-lg p-5'>
        <p>In KOSHISH, We try to inspire the students to dream and enable them to achieve it through education with the belief that 'simple effort can fill colors in many lives'.</p>
       </div>
       <div className='text-sm md:text-xl p-5 md:font-semibold '>
       <p>न चौरहार्यं न च राजहार्य, न भ्रातृभाज्यं न च भारकारि।</p>
       <p>व्यये कृते वर्द्धत एव नित्यं, विद्याधनं सर्वधनप्रधानम्।।</p>
       </div>
       
</div>
       <div>
        <img className='w-full p-5 rounded ' src={CultureImg} alt="" />
       </div>
       </div>
  )
}

export default Culture