// import React from 'react';
import { FaHome, FaUserPlus, FaUserMinus,FaUserEdit } from 'react-icons/fa';
import { AiOutlinePlus, AiOutlineClose  } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useState } from 'react';
const SidebarCocirculer = () => {
  const [mentorButton, setMentorButton] = useState(false);
  const [landpageButton, setLandpageButton] = useState(false);
  const [headerButton, setHeaderButton] = useState(false);
  const [eventButton, setEventButton] = useState(false);
  const [topmentorButton, setTopmentorButton] = useState(false);
  const [testimoralButton, setTestimoralButton] = useState(false);
  const [achivementButton, setAchivementButton] = useState(false);
  const [announcementButton, setAnnouncementButton] = useState(false);
  const [contactButton, setContactButton] = useState(false);
  // const [mentorButton, setMentorButton] = useState(false);
  // const [mentorButton, setMentorButton] = useState(false);

  return (
    <div className="h-screen w-64 bg-blue10 text-white flex flex-col items-center py-4">
      <div className="text-2xl mb-8">SidebarCocirculer</div>
      <ul className="w-full">
        <Link to= '/'>
        <li   className="w-full py-3 flex items-center px-4 hover:bg-gray-700 cursor-pointer">
            <FaHome className="mr-3" />
            <span>Dashboard</span>
        </li>
        </Link>
       
        <li className="w-full py-3 flex items-center px-4 hover:bg-gray-700 cursor-pointer">
          <FaUserPlus className="mr-3" />
          <div>
            <span>Mentor  </span> 
            <button onClick={()=>setMentorButton(!mentorButton)}>{mentorButton ? <AiOutlineClose />: <AiOutlinePlus />}</button>
          <div>
         { mentorButton && <ul>
           <Link to={'/mentor/add'}><li>Add Mentor</li></Link>
           <Link to={'/mentor/all'}><li>All Mentor</li></Link>
          </ul>}
          </div>
          </div>
         
        </li>
        <li className="w-full py-3 flex items-center px-4 hover:bg-gray-700 cursor-pointer">
          <FaUserPlus className="mr-3" />
          <div>
            <span>Event</span> 
            <button onClick={()=>setEventButton(!eventButton)}>{eventButton ? <AiOutlineClose />: <AiOutlinePlus />}</button>
          <div>
         { eventButton && <ul>
          <Link to={'/event/add'}><li>Add</li></Link>
          <Link to={'/event/all'}><li>All</li></Link>
          </ul>}
          </div>
          </div>
         
        </li>
        <li className="w-full py-3 flex items-center px-4 hover:bg-gray-700 cursor-pointer">
          <FaUserPlus className="mr-3" />
          <div>
            <span>Land Page  </span> 
            <button onClick={()=>setLandpageButton(!landpageButton)}>{landpageButton ? <AiOutlineClose />: <AiOutlinePlus />}</button>
          <div>
         { landpageButton && <ul>
          <li className="w-full py-3 flex items-center px-4 hover:bg-gray-700 cursor-pointer">
          <FaUserPlus className="mr-3" />
          <div>
            <span>Header  </span> 
            <button onClick={()=>setHeaderButton(!headerButton)}>{headerButton ? <AiOutlineClose />: <AiOutlinePlus />}</button>
          <div>
         { headerButton && <ul>
          <Link to={'/landpage/header/add'}><li>Add</li></Link>
          <Link to={'/landpage/header/all'}><li>All</li></Link>
          </ul>}
          </div>
          </div>
         
        </li>
         <li className="w-full py-3 flex items-center px-4 hover:bg-gray-700 cursor-pointer">
          <FaUserPlus className="mr-3" />
          <div>
            <span>Testimorals  </span> 
            <button onClick={()=>setTestimoralButton(!testimoralButton)}>{testimoralButton ? <AiOutlineClose />: <AiOutlinePlus />}</button>
          <div>
         { testimoralButton && <ul>
          <Link to={'/landpage/testimorals/add'}><li>Add</li></Link>
          <Link to={'/landpage/testimorals/all'}><li>All</li></Link>
          </ul>}
          </div>
          </div>
         
        </li>
        <li className="w-full py-3 flex items-center px-4 hover:bg-gray-700 cursor-pointer">
          <FaUserPlus className="mr-3" />
          <div>
            <span>achivement </span> 
            <button onClick={()=>setAchivementButton(!achivementButton)}>{achivementButton ? <AiOutlineClose />: <AiOutlinePlus />}</button>
          <div>
         { achivementButton && <ul>
          <Link to={'/landpage/achivement/add'}><li>Add</li></Link>
          <Link to={'/landpage/achivement/all'}><li>All</li></Link>
          </ul>}
          </div>
          </div>
         
        </li>
          </ul>}
          </div>
          </div>
         
        </li>
        <Link to= '/news'>
        <li className="w-full py-3 flex items-center px-4 hover:bg-gray-700 cursor-pointer">
          <FaUserEdit className="mr-3" />
          <span>News</span>
        </li>
        </Link>
        <Link to= '/gallery'>
        <li className="w-full py-3 flex items-center px-4 hover:bg-gray-700 cursor-pointer">
          <FaUserEdit className="mr-3" />
          <span>Gallery</span>
        </li>
        </Link>
        <Link to= '/contact'>
        <li className="w-full py-3 flex items-center px-4 hover:bg-gray-700 cursor-pointer">
          <FaUserEdit className="mr-3" />
          <span>contact</span>
        </li>
        </Link>
       
      </ul>
    </div>

  )
}

export default SidebarCocirculer