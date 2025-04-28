import React,{useContext,useEffect} from 'react'
import { AppContext } from '../context/App';
const PrivacyAndpolicy = () => {
    const {docuTitle, setDocuTitle,  } = useContext(AppContext);
      useEffect(()=>{
        setDocuTitle("Privacy-&-Policy-Koshish")
      },[docuTitle])
  return (
    <div>privacyAndpolicy</div>
  )
}

export default PrivacyAndpolicy