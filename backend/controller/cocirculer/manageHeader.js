import { headerModel } from "../../models/App/headerSchema.js";
import { cloudinaryUploadImage, cloudinaryRemoveImage } from "../../middleware/cloudimage/cloudinary.js";

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
const updateHeader = async(req,res) => {
  try {
    const {heading, imgurl, para}= req.body
    const {id} = req.params
    const imagefile = req.file
    if (!heading|| !para) {
      console.log("heading and para is not defined")
      return res.json({success:false,message:"heading and para is not defined" })
    }
    if (imagefile){
      await cloudinaryRemoveImage(imgurl)
      const image = await cloudinaryUploadImage(imagefile)
      await headerModel.findByIdAndUpdate(id,{image:image.secure_url, heading, para })
      return res.json({success:true,message:"header update successfully" })
    }
    
    await headerModel.findByIdAndUpdate(id,{ heading, para })
     return   res.json({success:true, message:"Top mentor is added"});
  } catch (error) {
    console.error(error)
    res.send({success:false, message: error.message});
  }
}
const AllHeader = async(req,res) => {
  try {
    
   const data = await headerModel.find({})
   
    res.json({success:true,data, message:"All Header is found"});
  } catch (error) {
    console.error(error)
    res.send({success:false, message: error.message});
  }
}
const HeaderById = async(req,res) => {
  try {
   const {id} = req.params
   const data = await headerModel.findById(id)
   return  res.json({success:true, data, message:`header is ${id}`});
  } catch (error) {
    console.error(error)
    res.send({success:false, message: error.message});
  }
}
const HeaderChange = async(req,res) => {
  try {
    const {id} = req.params
   const {isActive} = await headerModel.findById(id)
    await headerModel.findByIdAndUpdate(id, {isActive:!isActive})
   
   return  res.json({success:true, message:"Header is Change succesfully"});
  } catch (error) {
    console.error(error)
    res.send({success:false, message: error.message});
  }
}

export { addHeader,updateHeader,AllHeader,HeaderChange,HeaderById}