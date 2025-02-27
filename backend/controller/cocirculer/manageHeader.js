import { headerModel } from "../../models/App/headerSchema";
import { cloudinaryUploadImage } from "../../middleware/cloudimage/cloudinary";

const addHeader = async(req,res) => {
  try {
    const {heading, para}= req.body
    const imagefile = req.file
    await cloudinaryUploadImage(imagefile)
    clouldImg.then ((data)=>{
          headerModel.create({image:data.secure_url, heading, para })
          headerModel.save()
    })


    res.json({success:true, message:"Top mentor is added"});
  } catch (error) {
    console.error(error)
    res.send({success:false, message: error.message});
  }
}

export { addHeader}