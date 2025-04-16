import { cloudinaryUploadImage, cloudinaryRemoveImage } from "../../middleware/cloudimage/cloudinary.js";
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
      const newTestimorals = await TestimoralModel.create({headline,about: quote, name, linkedin, image:imageData.secure_url});
       await newTestimorals.save()

       return res.json({success:true, message:"new Testimoral is added successfully"})

    } catch (error) {
             console.log(error)
             res.json({success:true, message: error.message})
    }
}
const updatetestimorals = async(req,res) => {
   try {
     const {name ,imgurl,headline,quote, linkedin}=req.body
     const {id} = req.params
     const imagefile = req.file
     if(!name ||!headline ||!quote ||!linkedin){
        console.log("req: ",headline,quote, linkedin);
        res.json({success: false,message:"fill all the fields"});
     }
     if(imagefile){
       await cloudinaryRemoveImage(imgurl)
      const imageData = await cloudinaryUploadImage(imagefile)
     await TestimoralModel.findByIdAndUpdate(id,{headline,about: quote, name, linkedin, image:imageData.secure_url});
     
     return res.json({success:true, message:"Testimonial updated successfully"})
     }
     await TestimoralModel.findByIdAndUpdate(id, {headline,about: quote, name, linkedin,});
    
    return res.json({success:true, message:"Testimoral updated successfully"})

   } catch (error) {
            console.log(error)
            res.json({success:true, message: error.message})
   }
}
const Alltestimorals = async(req,res) => {
   try {
      const data = await TestimoralModel.find({})
      return res.json({success:true,data, message:"Testimonial found successfully"})

   } catch (error) {
            console.log(error)
            res.json({success:true, message: error.message})
   }
}
const testimoralsById = async(req,res) => {
   try {
      const {id} = req.params
     
     const data = await TestimoralModel.findById(id);
      return res.json({success:true,data, message:`Testimonial found successfully ${data.name}`})

   } catch (error) {
            console.log(error)
            res.json({success:true, message: error.message})
   }
}
const TerminateTestimorals = async(req,res) => {
   try {
      const {id} = req.params
      const {isActive} = await TestimoralModel.findById(id);
      await TestimoralModel.findByIdAndUpdate({isActive:!isActive});
      return res.json({success:true, message:"Testimoral Activate change successfully"})

   } catch (error) {
            console.log(error)
            res.json({success:true, message: error.message})
   }
}


export { addtestimorals,updatetestimorals,Alltestimorals,testimoralsById,TerminateTestimorals}