import React from 'react'
import IndexHeader from '../../component/App/header/indexHeader'
import IndexCulture from '../../component/App/culture/indexCulture'
import IndexEvent from '../../component/App/events/indexEvent'
import IndexMentor from '../../component/App/mentor/indexMentor'
import IndexAchievement from '../../component/App/Achievement/indexAchievement'
import IndexTestimorals from '../../component/App/Testimorals/indexTestimorals'
import Education from '../../component/App/Education'
const HomeApp = () => {
  return (
    <div>
       <IndexHeader/>
        <IndexCulture/>
        <Education/>
        <IndexEvent/>
        <IndexMentor/>
        <IndexAchievement/>
        <IndexTestimorals/>

    </div>
  )
}

export default HomeApp