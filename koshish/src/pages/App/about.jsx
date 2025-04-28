import React, { useContext, useEffect } from 'react'
import Intro from '../../component/App/About/intro'
import History from '../../component/App/About/history'
import Wedo from '../../component/App/About/wedo'
import Admin from '../../component/App/About/admin'
import Aim from '../../component/App/About/Aim'
import { AppContext } from '../../context/App'
const About = () => {
  const {docuTitle, setDocuTitle,} = useContext(AppContext)
  useEffect(()=>{
      setDocuTitle('About-Koshish')
  },[docuTitle])
  return (
    <div className='p-x-4'>
        <Intro/>
        <History/>
        <Aim/>
        <Wedo/>
        {/* <Admin/> */}
    </div>
  )
}

export default About