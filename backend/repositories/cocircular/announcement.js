import { Announcement } from "../../models/App/announcementSchema.js";

const saveAnnouncementDB = async(data)=>{
    try {
       await Announcement.create({data})
    } catch (error) {
        console.log(error);
        throw Error(error.message)
    }
}

const updateAnnouncement = async (data)=>{
     await Announcement.findByIdAndUpdate(data._id, {heading:data.heading, announcement:data.announcement, isActive:true });
}

const hideAnnouncement = async(id)=>{
       await Announcement.findByIdAndUpdate({_id:id},{isAtive:false} )
}



export {
    saveAnnouncementDB,
    updateAnnouncement,
    hideAnnouncement,
}