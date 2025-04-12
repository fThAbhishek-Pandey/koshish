import { homeEventsModel} from "../../models/Events/eventsSchema.js" 
import { cloudinaryUploadImage,cloudinaryRemoveImage } from "../../middleware/cloudimage/cloudinary.js"
import { logger } from "../../middleware/logger/logger.js"

const Addevent = async(req, res) => {
   try {
       logger.info("you are in add event");
        const {eventName,startdate,isPrize,PrizeHeading,PrizePara,IIIrdPrize,IIndPrize,IstPrize,isCertification,endDate,registrationOpen, desp} =req.body
       console.log(req.body)
       const thumbnail = req.file
       console.log(thumbnail)
       if (!eventName || !startdate || !desp ||!endDate) {
            console.log(eventName, date, desp)
            return res.json({success:false,message: "fill all filled the filled" })
       }
       if(isPrize){
          if(!PrizeHeading || !PrizePara){
            return res.json({success:false,message: "fill prize filled the filled" })
          }
       }
       if (!thumbnail){
             res.json({success:false, message: "please upload thumbnail"})
       }
       const imageData=await cloudinaryUploadImage(thumbnail)
      //  .then((data)=>console.log("-->",data))
      console.log("-->",imageData)
      const prize = {
        PrizeHeading,para: PrizePara,IIIrdPrize,IIndPrize,IstPrize
      }
       const newEvent = await homeEventsModel.create({thumbnail:imageData.secure_url, name:eventName,isPrize, startdate,endDate,registrationOpen,isCertification,prize:prize ,desc: desp })
       await newEvent.save();
       return res.json({success:true, message: "new event is created successfully" });
   } catch (error) {
     console.log(error)
     res.json ({success :false, message: error.message})
   }
}
const updateEvent = async(req, res)=>{
  try {
    const {eventName,imgurl, date, desp} =req.body
    const {id} = req.params
    console.log(req.body)
    const thumbnail = req.file
    console.log(thumbnail)
    if (!eventName || !date || !imgurl || !desp) {
         console.log(eventName, date, desp)
         return res.json({success:false,message: "fill all filled the filled" })
    }
    if (thumbnail){
      await cloudinaryRemoveImage(imgurl)
      const imageData=await cloudinaryUploadImage(thumbnail)
      console.log("-->",imageData)
      await homeEventsModel.findByIdAndUpdate( id, {thumbnail:imageData.secure_url, name:eventName, date, desc: desp })
    }
    else {
      await homeEventsModel.findByIdAndUpdate(id, {thumbnail:imageData.secure_url, name:eventName, date, desc: desp })
      
    }
    return res.json({success:true, message: "new event is created successfully" });
} catch (error) {
  console.log(error)
  res.json ({success :false, message: error.message})
}
}
const hideEvent = async (req,res)=>{
    try {
      const {id} = req.params
      await homeEventsModel.findByIdAndUpdate(id, {isActive: !isActive})
      res.json({success: true, message: "hide successfully"});
    } catch (error) {
      console.log(error)
      res.json ({success :false, message: error.message})
    }  
}
const topEvent = async (req,res)=>{
  
  try {
    const {id} = req.params
    await homeEventsModel.findByIdAndUpdate(id, {isTop: !isTop})
    res.json({success: true, message: "topped successfully"});
  } catch (error) {
    console.log(error)
    res.json ({success :false, message: error.message})
  }  
}
const AllEvents = async (req, res)=>{
      try {
        const data = await homeEventsModel.find({})
        return res.json({success:true, data, message:"all data event found"});
      } catch (error) {
        console.log(error)
        res.json ({success :false, message: error.message})
      }
}
export  {Addevent,updateEvent,hideEvent,AllEvents,topEvent}