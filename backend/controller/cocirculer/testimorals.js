import { cloudinaryUploadImage } from "../../middleware/cloudimage/cloudinary.js";
import { TestimoralModel } from "../../models/App/TestimoralSchema.js";
const addtestimorals = async(req,res) => {
    try {
      const {name ,headline,quote, linkedin}=req.body
      const imagefile = req.file
      if(!name ||!headline ||!quote ||!linkedin){
         console.log("req: ",headline,quote, linkedin);
         res.json({success: false,message:"fill all the fields"});
      }
      if(!imagefile){
         res.json({success:false, message:"please upload the images"});
      }
      const imageData = await cloudinaryUploadImage(imagefile)
      const newTestimorals = await TestimoralModel.create({headline,quote, linkedin, image:imageData.secure_url});
       await newTestimorals.save()

       return res.json({success:true, message:"new Testimoral is added successfully"})

    } catch (error) {
             console.log(error)
             res.json({success:true, message: error.message})
    }
}

export { addtestimorals}