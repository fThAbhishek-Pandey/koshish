import {v2 as cloudinary} from 'cloudinary'

const ConnectCloudinary = async ()=>{
    cloudinary.config({
        cloud_name:process.env.CLOUDINARY_NAME,
        api_key:process.env.CLOUDARY_API_KEY,
        api_secret:process.env.CLOUDNARY_SECKRET_KEY,
    });
}
export default ConnectCloudinary;