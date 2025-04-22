import React, { useState,useContext } from 'react'
import { CocirculerContext } from '../../../context/cocirculer';
// Tailwind CSS utility classes for input fields
const inputField = "w-full mt-1 px-3 py-2 border-2 border-blue-400 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-green-400";

const textAreaField = "border-2 w-full mt-1 border-blue-400 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-green-400 px-3 py-2 h-24";

const AddMentor = () => {
      const {handelAddMentor} = useContext(CocirculerContext)
      const [name,setName] = useState('');
      const [email, setEmail] = useState('');
      const [subject,setSubject] = useState('');
      const [classTeacher, setClassTeacher] = useState('');
      const [speciality, setSpeciality] = useState('');
      const [ quote, setQuote] = useState('');
      const [ aboutHead, setAboutHead] = useState('');
      const [ about, setAbout] = useState('');
      const [image , setImage] = useState('')
      const [isTop, setIsTop] = useState(false);
      const [isActve, setIsActive] = useState(true);
      const [isVisionary, setIsVisionary] = useState(false);
      const [linkedin, setlinkedin] = useState();
      const formData = new FormData();
      formData.append('name',name)
      formData.append('email',email)
      formData.append('subject',subject)
      formData.append('classTeacher',classTeacher)
      formData.append('speciality',speciality)
      formData.append('quote',quote)
      formData.append('aboutHead',aboutHead)
      formData.append('about',about)
      formData.append('isTop',isTop)
      formData.append('isAcitve',isActve)
      formData.append('isVisionary',isVisionary)
      formData.append('image',image);
      formData.append('linkedin',linkedin);
      const onsubmitHandler =(e)=>{
          e.preventDefault();
          console.log("hi i am onsubmit handler")
          handelAddMentor(formData)
      }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
    <h2 className="text-2xl font-semibold text-center mb-6">Add Members</h2>
    <form onSubmit={onsubmitHandler} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Upload Mentor Image</label>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          required
          className={inputField}
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className={inputField}
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={inputField}
        />
      </div>
      <div>
        <label className="block text-sm font-medium">LinkedIn</label>
        <input
          type="text"
          value={linkedin}
          onChange={(e) => setlinkedin(e.target.value)}
          required
          className={inputField}
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Subject</label>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
          className={inputField}
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Class Teacher</label>
        <input
          type="text"
          value={classTeacher}
          onChange={(e) => setClassTeacher(e.target.value)}
          required
          className={inputField}
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Speciality</label>
        <input
          type="text"
          value={speciality}
          onChange={(e) => setSpeciality(e.target.value)}
          required
          className={inputField}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={isTop}
              onChange={(e) => setIsTop(e.target.checked)}
            />
            <span>Top Mentor</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={isActve}
              onChange={(e) => setIsActive(e.target.checked)}
            />
            <span>Active</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={isVisionary}
              onChange={(e) => setIsVisionary(e.target.checked)}
            />
            <span>Visionary</span>
          </label>
        </div>
      <div>
        <label className="block text-sm font-medium">Quote</label>
        <textarea
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
          required

          className={textAreaField}
        ></textarea>
      </div>
      <div>
        <label className="block text-sm font-medium">About Heading</label>
        <input
          type="text"
          value={aboutHead}
          onChange={(e) => setAboutHead(e.target.value)}
          required
          className={inputField}
        />
      </div>
      <div>
        <label className="block text-sm font-medium">About</label>
        <textarea
          value={about}
          onChange={(e) => setAbout(e.target.value)}
          required
          className={textAreaField}
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-green-600 text-white font-medium py-2 px-4 rounded-lg shadow-md transition-all duration-300 hover:bg-green-700 hover:scale-105"
      >
        Add Mentor
      </button>
    </form>
  </div>
  )
}

export default AddMentor

