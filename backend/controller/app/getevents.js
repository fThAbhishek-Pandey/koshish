import { homeEventsModel } from "../../models/Events/eventsSchema.js";
const getAllEvents = async(req,res) => {
 try {
    const data = await homeEventsModel.find({});
    console.log(data);
   return res.json({success:true, message:"get all homeEvent", data})
 } catch (error) {
    console.log(error)
   return res.json ({success:false, message:error.message});
 }


}
const getNewEvents = async(req,res) => {
   try {
      const data = await homeEventsModel.find({isActive:true});
      console.log(data);
      res.json({success:true, message:"get all New Event", data})
   } catch (error) {
      console.log(error)
      res.json ({success:false, message:error.message});
   }
  
  
  }
  const getpastEvents = async(req,res) => {
   try {
      const data = await homeEventsModel.find({isActive:false});
      console.log(data);
      res.json({success:true, message:"get all Past Event", data})
   } catch (error) {
      console.log(error)
      res.json ({success:false, message:error.message});
   }
  }
  const getTopEvents = async(req,res) => {
   try {
      const data = await homeEventsModel.find({isTop:true});
      console.log(data);
      const sendData = data.slice(-4).map((item)=>{
         const {_id,name,startdate,isPrize,isActive,mode,team,thumbnail,isCertification,endDate,registrationOpen, }= item;
         return {_id,name,startdate,thumbnail,isActive,mode,team,isPrize,isCertification,endDate,registrationOpen }
      })
      res.json({success:true, message:"get all Top Event", data:sendData})
   } catch (error) {
      console.log(error)
      res.json ({success:false, message:error.message});
   }
  }
  const getEventById = async(req,res) => {
   try {
      const {id} = req.body
      const data = await homeEventsModel.findById(id);
      console.log(data);
      res.json({success:true, message:`found Event of id ${id}`, data:data})
   } catch (error) {
      console.log(error)
      res.json ({success:false, message:error.message});
   }
  }

export  {getEventById,getAllEvents,getTopEvents,getNewEvents,getpastEvents}