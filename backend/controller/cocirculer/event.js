import { homeEventsModel} from "../../models/App/eventsSchema.js" 
import { cloudinaryUploadImage } from "../../middleware/cloudimage/cloudinary.js"
const Addevent = async(req, res) => {
   try {
       const {eventName, date, desc} =req.body
       console.log(req.body)
       const thumbnail = req.file
       if (!eventName || !date || !desc) {
            return res.json({success:false,message: "fill all the filled" })
       }
       if (!thumbnail){
             res.json({success:false, message: "please upload thumbnail"})
       }
       const imageData= await cloudinaryUploadImage(thumbnail)
       const newEvent = await homeEventsModel.create({thumbnail:imageData.secure_url, name:eventName, date, desc })
       await newEvent.save();
       return res.json({success:true, message: "new event is created successfully" });
   } catch (error) {
     console.log(error)
     res.json ({success :false, message: error.message})
   }
}

export  {Addevent}