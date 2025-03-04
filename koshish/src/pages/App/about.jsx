import React from 'react'
import Intro from '../../component/App/About/intro'
import History from '../../component/App/About/history'
import Wedo from '../../component/App/About/wedo'
import Admin from '../../component/App/About/admin'
import Aim from '../../component/App/About/Aim'
const About = () => {
  return (
    <div>
        <Intro/>
        <History/>
        <Aim/>
        <Wedo/>
        <Admin/>
    </div>
  )
}

export default About