import { headerModel } from "../../models/App/headerSchema.js";
import { cloudinaryUploadImage } from "../../middleware/cloudimage/cloudinary.js";

const addHeader = async(req,res) => {
  try {
    const {heading, para}= req.body
    const imagefile = req.file
    if (!heading|| !para) {
      console.log("heading and para is not defined")
      return res.json({success:false,message:"heading and para is not defined" })
    }
    if (!imagefile){

      return res.json({success:false,message:"please upload header image" })
    }
    else console.log("img-->",imagefile)
   const image = await cloudinaryUploadImage(imagefile)
   if (!image || !image.secure_url) {
    console.log("image --.",image)
    throw new Error("Image upload failed");
}
   console.log("image -->",image)
   const newHeader = await headerModel.create({image:image.secure_url, heading, para })
   await newHeader.save()

    res.json({success:true, message:"Top mentor is added"});
  } catch (error) {
    console.error(error)
    res.send({success:false, message: error.message});
  }
}

export { addHeader}