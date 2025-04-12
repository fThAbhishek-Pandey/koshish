import { Announcement } from "../../models/App/announcementSchema.js";

const saveAnnouncementDB = async(data)=>{
    try {
       await Announcement.create(data)
    } catch (error) {
        console.log(error);
        throw Error(error.message)
    }
}

const updateAnnouncementDB = async (id, data)=>{
     await Announcement.findByIdAndUpdate(id , data);
}

const hideAnnouncementDB = async(id)=>{
       await Announcement.findByIdAndUpdate({_id:id},{isAtive:false} )
}



export {
    saveAnnouncementDB,
    updateAnnouncementDB,
    hideAnnouncementDB,
}