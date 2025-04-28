import React, {useState, useEffect,useContext} from 'react'
import { AppContext } from '../../../context/App'
const Top = () => {
  const {docuTitle, setDocuTitle,} = useContext(AppContext)
        useEffect(()=>{
            setDocuTitle('Koshish-Welfare')
        },[docuTitle])
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const text = "A welfare and educational society." 
  useEffect(() => {
    let timeout;
    if (!isDeleting) {
      if (charIndex < text.length) {
        timeout = setTimeout(() => {
          setDisplayText((prev) => prev + text[charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 1000); // wait before deleting
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        }, 50);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(false);
        }, 500); // pause before typing again
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, text]);

  return (
    <div className='w-full h-full  pb-10 sm:pb-16 md:pb-16 lg:pb-20 sm:px-1 lg:px-2 relative top-24 mb-16 md:mb-10'>
    <div className='px-1 py-4 md:py-10 lg:py-10'>
    <h1 className='text-green-500 text-center text-3xl font-semibold md:text-4xl lg:text-5xl'>
      Welcome to <span className='text-3xl font-extrabold text-blue10 underline md:text-5xl lg:text-6xl'>KOSHISH</span>
    </h1>
      <h3 className='text-lg md:text-2xl mt-5 text-center text-green-500'>{"<"} {displayText} <span>|</span>{">"}</h3>
    <p className='w-full md:w-3/4 lg:w-2/3 my-2 sm:mt-8 text-gray-800 text-center mx-auto text-sm sm:text-base px-4'>
      <span className='font-bold text-xl text-blue10'>Koshish</span> is a social initiative dedicated to empowering marginalized communities, promoting education, fostering equality, and creating sustainable opportunities.
    </p>
  </div>
  </div>
  )
}

export default Top