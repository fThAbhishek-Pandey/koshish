import {v2 as cloudinary} from 'cloudinary'

const ConnectCloudinary = async ()=>{
    console.log("i am ConnectCloudinary",process.env.CLOUDINARY_CLOUD_NAME," ",process.env.CLOUDINARY_API_KEY," ",process.env.CLOUDINARY_API_SECRET)
   try {
    cloudinary.config({
        cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
    });
   } catch (error) {
        console.log("ConnectCloudinary : ",error)
   }
    
}
export default ConnectCloudinary;