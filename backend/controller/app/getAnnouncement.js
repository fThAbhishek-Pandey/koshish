import { Announcement } from "../../models/App/announcementSchema.js"

const getnewAnnouncement = async(req, res) => {
    try {
       const data = await Announcement.find({isAtive:true});
       const sendData = data.map((item)=>{
           const {_id, isAtive,heading, image,date} = item;
        return  {_id, isAtive,heading, image,date};
    });
       console.log("new data: ",sendData);
      return res.json({success: true, message: "find new data", data: sendData.reverse()})
    } catch (error) {
        console.log(error);
        return res.json({success: false, message: error.message})
    }
}
const getAllAnnouncement = async(req, res) => {
    try {
       const data = await Announcement.find({});
       const sendData = data.map((item)=>{
        const {_id, isAtive,heading, image,date} = item;
     return  {_id, isAtive,heading, image,date};
 });
      return res.json({success: true, message: "find all data", data:sendData})
    } catch (error) {
        console.log(error);
        return res.json({success: false, message: error.message})
    }
}
const getpastAnnouncement = async(req, res) => {
    try {
       const data = await Announcement.find({isAtive:false});
       const sendData = data.map((item)=>{
        const {_id, isAtive,heading, image,date} = item;
     return  {_id, isAtive,heading, image,date};
 });
      return res.json({success: true, message: "find past data", data:sendData})
    } catch (error) {
        console.log(error);
        return res.json({success: false, message: error.message})
    }
}
const getmyAnnouncement = async(req, res)=>{
    try {
        const {id} = req.body
        
        const data = await Announcement.findById(id);
        return res.json({success: true, message: "find my data", data})
    } catch (error) {
            console.log(error)
        return res.json({success: true, message: `find ${id}`})
    }
}
export {getAllAnnouncement, getnewAnnouncement,getpastAnnouncement,getmyAnnouncement}
