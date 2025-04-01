import { handleValidationError } from "../../middleware/errorHandler.js";
import {saveAnnouncementDB} from "../../repositories/cocircular/announcement.js"; 
import { cloudinaryUploadImage } from "../../middleware/cloudimage/cloudinary.js";
const announcement = async(req,res,next) => {
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
             res.json({success:true, message: error.message})
    }
}

export default announcement