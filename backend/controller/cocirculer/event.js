import { homeEventsModel} from "../../models/App/eventsSchema.js" 
import { cloudinaryUploadImage } from "../../middleware/cloudimage/cloudinary.js"
const Addevent = async(req, res) => {
   try {
       const {eventName, date, desp} =req.body
       console.log(req.body)
       const thumbnail = req.file
       console.log(thumbnail)
       if (!eventName || !date || !desp) {
            console.log(eventName, date, desp)
            return res.json({success:false,message: "fill all filled the filled" })
       }
       if (!thumbnail){
             res.json({success:false, message: "please upload thumbnail"})
       }
       const imageData=await cloudinaryUploadImage(thumbnail)
      //  .then((data)=>console.log("-->",data))
      console.log("-->",imageData)
       const newEvent = await homeEventsModel.create({thumbnail:imageData.secure_url, name:eventName, date, desc: desp })
       await newEvent.save();
       return res.json({success:true, message: "new event is created successfully" });
   } catch (error) {
     console.log(error)
     res.json ({success :false, message: error.message})
   }
}

export  {Addevent}