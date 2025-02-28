import { Events } from "../../models/App/eventsSchema.js" 
import { cloudinaryUploadImage } from "../../middleware/cloudimage/cloudinary.js"
const Addevent = async(req, res) => {
   try {
       const {} =req.body
       const tumbnail = req.file
       if (true) {

       }
       if (!tumbnail){

       }
       const imageData= cloudinaryUploadImage(tumbnail)
       const newEvent = await Events.create({})
       await newEvent.save();
       return res.json({success:true, message: "new event is created successfully" });
   } catch (error) {
     console.log(error)
     res.json ({success :false, message: error.message})
   }
}

export  {Addevent}