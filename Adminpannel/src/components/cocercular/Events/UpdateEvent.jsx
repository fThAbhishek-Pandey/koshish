import React, {useContext,useEffect,useState} from 'react'
import { CocirculerContext } from '../../../context/cocirculer'
import { useNavigate, useParams } from 'react-router-dom'
import Markdown from 'react-markdown';
const UpdateEvent = () => {
  const { EventById, setEventById,handelgetEventById,handelupdateEventById,handelTopEvent,handelHideEvent} = useContext( CocirculerContext)
        const navigater = useNavigate();
        const {id} = useParams()
        console.log("id", id);
           useEffect(()=>{
              handelgetEventById(id)
           },[])
   const [eventName, setEventName] = useState(EventById.name);
   const [imgurl, setImgUrl] = useState(EventById.thumbnail);
   const [thumbnail, setThumbnail] = useState(false);
   const [startdate, setStartdate] = useState(EventById.startdate);
   const [endDate, setEndDate] = useState(EventById.endDate);
   const [registrationOpen, setRegistrationOpen] = useState(EventById.registrationOpen);
   const [isPrize, setIsPrize] = useState(EventById.isPrize);
   const [mode, setIsMode] = useState(EventById.mode);
   const [team, setTeam] = useState(EventById.team);
   const [isActive, setIsActive] = useState(EventById.isActive);
   const [isTop, setIsTop] = useState(EventById.isTop);
   const [PrizeHeading, setPrizeHeading] = useState(EventById.prize.PrizeHeading);
   const [PrizePara, setPrizePara] = useState(EventById.prize.para);
   const [IIIrdPrize, setIIIrdPrize] = useState(EventById.prize.IIIrdPrize);
   const [IIndPrize, setIIndPrize] = useState(EventById.prize.IIndPrize);
   const [IstPrize, setIstPrize] = useState(EventById.prize.IstPrize);
   const [isCertification, setIsCertification] = useState(EventById.isCertification);
   const [desp, setDesp] = useState(EventById.desc);
 
   const handleonsubmit = (e) => {
     e.preventDefault();
     const formdata = new FormData();
     formdata.append('image', thumbnail);
     formdata.append('imgurl', imgurl);
     formdata.append('eventName', eventName);
     formdata.append('startdate', startdate);
     formdata.append('endDate', endDate);
     formdata.append('registrationOpen', registrationOpen);
     formdata.append('desp', desp);
     formdata.append('isPrize', isPrize);
     formdata.append('mode', mode);
     formdata.append('team', team);
     formdata.append('isTop', isTop);
     formdata.append('isActive', isActive);
     formdata.append('PrizeHeading', PrizeHeading);
     formdata.append('PrizePara', PrizePara);
     formdata.append('IIIrdPrize', IIIrdPrize);
     formdata.append('IIndPrize', IIndPrize);
     formdata.append('IstPrize', IstPrize);
     formdata.append('isCertification', isCertification);
     handelupdateEventById(formdata, id);
   };
 
   return (
     <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
       <h2 className="text-2xl font-bold mb-6 text-gray-800">Update Event</h2>
       <form onSubmit={handleonsubmit} className="space-y-6">
         <div>
           <label className="block text-gray-700 font-medium mb-2">Event Name</label>
           <input
             onChange={(e) => setEventName(e.target.value)}
             value={eventName}
             className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
             type="text"
           />
         </div>
 
         <div>
           <label className="block text-gray-700 font-medium mb-2">Upload Thumbnail</label>
           <input
             onChange={(e) => setThumbnail(e.target.files[0])}
             className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
             type="file"
           />
         </div>
 
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <div>
             <label className="block text-gray-700 font-medium mb-2">Start Date</label>
             <input
               onChange={(e) => setStartdate(e.target.value)}
               value={startdate}
               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
               type="date"
             />
           </div>
           <div>
             <label className="block text-gray-700 font-medium mb-2">End Date</label>
             <input
               onChange={(e) => setEndDate(e.target.value)}
               value={endDate}
               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
               type="date"
             />
           </div>
         </div>
 
         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
           <label className="flex items-center space-x-2">
             <input
               type="checkbox"
               checked={isPrize}
               onChange={(e) => setIsPrize(e.target.checked)}
             />
             <span>Prize</span>
           </label>
           <label className="flex items-center space-x-2">
             <input
               type="checkbox"
               checked={registrationOpen}
               onChange={(e) => setRegistrationOpen(e.target.checked)}
             />
             <span>Registration Open</span>
           </label>
           <label className="flex items-center space-x-2">
             <input
               type="checkbox"
               checked={isCertification}
               onChange={(e) => setIsCertification(e.target.checked)}
             />
             <span>Certification</span>
           </label>
           <label className="flex items-center space-x-2">
             <input
               type="checkbox"
               checked={mode}
               onChange={(e) => setIsMode(e.target.checked)}
             />
             <span>Online</span>
           </label>
           <label className="flex items-center space-x-2">
             <input
               type="checkbox"
               checked={isTop}
               onChange={(e) => setIsTop(e.target.checked)}
             />
             <span>Top Event</span>
           </label>
           <label className="flex items-center space-x-2">
             <input
               type="checkbox"
               checked={isActive}
               onChange={(e) => setIsActive(e.target.checked)}
             />
             <span>Active Now</span>
           </label>
           <label className="flex items-center space-x-2">
             <input
               type="checkbox"
               checked={team}
               onChange={(e) => setTeam(e.target.checked)}
             />
             <span>Team</span>
           </label>
         </div>
 
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <div>
             <label className="block text-sm font-medium text-gray-700">Event Description</label>
             <textarea
               className="w-full mt-1 block p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
               value={desp}
               onChange={(e) => setDesp(e.target.value)}
               rows="8"
             />
           </div>
           <div>
             <div className="text-sm font-medium text-gray-700 mb-1">Markdown Preview</div>
             <div className="bg-green-100 border-l-4 border-green-500 p-4 rounded-lg h-full overflow-auto">
               <Markdown>{desp}</Markdown>
             </div>
           </div>
         </div>
 
         {isPrize && (
           <div className="space-y-4">
             <div>
               <label className="block text-gray-700 font-medium mb-2">Prize Heading</label>
               <input
                 value={PrizeHeading}
                 onChange={(e) => setPrizeHeading(e.target.value)}
                 className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                 type="text"
               />
             </div>
 
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div>
                 <label className="block text-sm font-medium text-gray-700">Prize Criteria</label>
                 <textarea
                   value={PrizePara}
                   onChange={(e) => setPrizePara(e.target.value)}
                   rows="6"
                   className="w-full mt-1 block p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                 />
               </div>
               <div>
                 <div className="text-sm font-medium text-gray-700 mb-1">Markdown Preview</div>
                 <div className="bg-green-100 border-l-4 border-green-500 p-4 rounded-lg h-full overflow-auto">
                   <Markdown>{PrizePara}</Markdown>
                 </div>
               </div>
             </div>
 
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
               <div>
                 <label>First Prize</label>
                 <input
                   value={IstPrize}
                   onChange={(e) => setIstPrize(e.target.value)}
                   className="w-full p-2 border rounded-md"
                   type="text"
                 />
               </div>
               <div>
                 <label>Second Prize</label>
                 <input
                   value={IIndPrize}
                   onChange={(e) => setIIndPrize(e.target.value)}
                   className="w-full p-2 border rounded-md"
                   type="text"
                 />
               </div>
               <div>
                 <label>Third Prize</label>
                 <input
                   value={IIIrdPrize}
                   onChange={(e) => setIIIrdPrize(e.target.value)}
                   className="w-full p-2 border rounded-md"
                   type="text"
                 />
               </div>
             </div>
           </div>
         )}
 
         <button
           type="submit"
          //  onClick={()=> navigater('/event/all')}
           className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition"
         >
           update Event
         </button>
       </form>
     </div>
   );
}

export default UpdateEvent