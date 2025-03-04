import React from 'react'

import Education from '../../component/App/home/Education'
import IndexHeader from '../../component/App/home/header'
import Culture from '../../component/App/home/culture'
import Event from '../../component/App/home/event'
import Mentor from '../../component/App/home/mentor'
import Testimorals from '../../component/App/home/testimorals'
import Achievement from '../../component/App/home/Achievement'
const HomeApp = () => {
  return (
    <div>
       <IndexHeader/>
       <Culture/>
        <Event/>
        <Education/>
        <Mentor/>
        <Achievement/>
        <Testimorals/>
    </div>
  )
}

export default HomeApp