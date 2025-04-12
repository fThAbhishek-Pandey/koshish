import { handleValidationError } from "../../middleware/errorHandler.js";
import {saveAnnouncementDB,updateAnnouncementDB,hideAnnouncementDB} from "../../repositories/cocircular/announcement.js"; 
import { cloudinaryUploadImage } from "../../middleware/cloudimage/cloudinary.js";
const CreateAnnouncement = async(req,res,next) => {
    try {
        console.log(req.body);
        const { announcement,
          date,
          heading} = req.body;
          if(!announcement || !date || !heading) {
              res.json({success:false,message:"fill all data" });
          }
          const imgfile = req.file
          if(!imgfile) {
               return res.json({success:false, message:"please upload image"})
          }
        const imageData=   await  cloudinaryUploadImage(imgfile)
         console .log("anouncement",announcement,
          date,
          heading,imageData.secure_url)
        await saveAnnouncementDB({ announcement,
          date,
          heading, image:imageData.secure_url});
       return  res.status(200).json({
          success: true,
          message: "Announcement Created!",
        });
        
    } catch (error) {
             console.log(error)
             res.json({success:false, message: error.message})
    }
}
const UpdateAnnouncement = async (req,res)=>{
  try {
    console.log(req.body);
    const { announcement, imgurl,
      date,
      heading} = req.body;
      if(!announcement || !date || !heading) {
          res.json({success:false,message:"fill all data" });
      }
      const imgfile = req.file
      if(!imgfile) {
        cloudinaryRemoveImage(imgurl)
        const imageData=   await  cloudinaryUploadImage(imgfile)
        console .log("anouncement",announcement,
         date,
         heading,imageData.secure_url)
       await updateAnnouncementDB({ announcement,
         date,
         heading, image:imageData.secure_url});
      }
      else {
        await updateAnnouncementDB({ announcement,
          date,
          heading});
      }
    
   return  res.status(200).json({
      success: true,
      message: "Announcement update successfully!",
    });
    
} catch (error) {
         console.log(error)
         res.json({success:false, message: error.message})
}


}
const hideAnnouncement = async ()=>{
  try {
    const {id} = req.params
    hideAnnouncement(id)
    res.json({success:true, message:"hide successfully"})
  } catch (error) {
    console.log(error)
    res.json({success:false, message:error.message})
  }
}
export { CreateAnnouncement,UpdateAnnouncement,hideAnnouncement}