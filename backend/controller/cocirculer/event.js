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
    const {eventName,startdate,imgurl,isPrize,PrizeHeading,PrizePara,IIIrdPrize,IIndPrize,IstPrize,isCertification,endDate,registrationOpen, desp} =req.body
    const {id} = req.params
    console.log("update Event", id)
    console.log("i am update eventby id",req.body)
    const thumbnail = req.file
    console.log(thumbnail)
    if (!eventName || !startdate || !desp ||!endDate) {
         console.log(eventName,imgurl, date, desp)
         return res.json({success:false,message: "fill all filled the filled" })
    }
    if (thumbnail){
      await cloudinaryRemoveImage(imgurl)
      const imageData=await cloudinaryUploadImage(thumbnail)
      console.log("-->",imageData)
      await homeEventsModel.findByIdAndUpdate( id, {thumbnail:imageData.secure_url,startdate,isPrize,PrizeHeading,PrizePara,IIIrdPrize,IIndPrize,IstPrize,isCertification,endDate,registrationOpen, name:eventName,  desc: desp })
    }
    else {
      await homeEventsModel.findByIdAndUpdate(id, { name:eventName,startdate,isPrize,PrizeHeading,PrizePara,IIIrdPrize,IIndPrize,IstPrize,isCertification,endDate,registrationOpen, desc: desp })
      
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
      const {isActive} = await homeEventsModel.findById(id) 
      await homeEventsModel.findByIdAndUpdate(id, {isActive: !isActive})
      res.json({success: true, message: "changed successfully"});
    } catch (error) {
      console.log(error)
      res.json ({success :false, message: error.message})
    }  
}
const topEvent = async (req,res)=>{
  
  try {
    const {id} = req.params
    const {isTop} = await homeEventsModel.findById(id) 
    await homeEventsModel.findByIdAndUpdate(id, {isTop: !isTop})
    res.json({success: true, message: "changed successfully"});
  } catch (error) {
    console.log(error)
    res.json ({success :false, message: error.message})
  }  
}
const EventById = async(req,res)=>{
  try {
    const {id} = req.params
    const data = await homeEventsModel.findById(id)
    return res.json({success:true, data, message:`event found ${id}`});
  } catch (error) {
    console.log(error)
    res.json ({success :false, message: error.message})
  }
}
const AllEvents = async (req, res)=>{
      try {
       
        const data = await homeEventsModel.find({})
        return res.json({success:true, data,  message:"all data event found"});
      } catch (error) {
        console.log(error)
        res.json ({success :false, message: error.message})
      }
}
const deleteById = async (req, res)=>{
  try {
    const {id} = req.params
    const {thumbnail} = await homeEventsModel.findById(id) 
    await cloudinaryRemoveImage(thumbnail)
    await homeEventsModel.findByIdAndDelete(id)
    return res.json({success:true , message:`delete event ${id}`});
  } catch (error) {
    console.log(error)
    res.json ({success :false, message: error.message})
  }
}
export  {Addevent,updateEvent,hideEvent,AllEvents,topEvent,EventById,deleteById}