import { Announcement } from "../../models/App/announcementSchema.js"

const getnewAnnouncement = async(req, res) => {
    try {
       const data = await Announcement.find({isAtive:true});
      return res.json({success: true, message: "find all data", data})
    } catch (error) {
        console.log(error);
        return res.json({success: false, message: error.message})
    }
}
const getAllAnnouncement = async(req, res) => {
    try {
       const data = await Announcement.find({});
      return res.json({success: true, message: "find all data", data})
    } catch (error) {
        console.log(error);
        return res.json({success: false, message: error.message})
    }
}
const getpastAnnouncement = async(req, res) => {
    try {
       const data = await Announcement.find({isAtive:false});
      return res.json({success: true, message: "find all data", data})
    } catch (error) {
        console.log(error);
        return res.json({success: false, message: error.message})
    }
}
const getmyAnnouncement = async(req, res)=>{
    try {
        const {id} = req.body
        const data = await Announcement.findById(id);
        return res.json({success: true, message: "find all data", data})
    } catch (error) {
            console.log(error)
        return res.json({success: true, message: `find ${id}`})
    }
}
export {getAllAnnouncement, getnewAnnouncement,getpastAnnouncement,getmyAnnouncement}
