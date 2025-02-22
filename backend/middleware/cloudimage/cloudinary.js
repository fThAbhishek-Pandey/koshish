import {v2 as cloudinary} from 'cloudinary'
  // Cloudinary Upload Image
import fs from 'fs'
const cloudinaryUploadImage = async (fileToUpload) => {
    try {
      console.log('i am cloudnaryupload function', fileToUpload);
      if (!fileToUpload) return null;
      const data = await cloudinary.uploader.upload(fileToUpload.path, {
        resource_type: "auto",
      })
      .then((responce)=>console.log("image is uploaded", responce))
      .catch((error)=>console.log(error))
      .finally(()=>{
         console.log("image is going to delete temprary image on server")
          fs.unlinkSync(fileToUpload.path)
      })
      console.log("data : ",data);
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Internal Server Error (cloudinary)");
    }
  };

  // Cloudinary Remove Image
const cloudinaryRemoveImage = async (imagePublicId) => {
    try {
      console.log("")
      const result = await cloudinary.uploader.destroy(imagePublicId);
      return result;
    } catch (error) {
      console.log(error);
      throw new Error("Internal Server Error (cloudinary)");
    }
  };

  // Cloudinary Remove Multiple Image
const cloudinaryRemoveMultipleImage = async (publicIds) => {
    try {
      const result = await cloudinary.v2.api.delete_resources(publicIds)
      return result;
    } catch (error) {
      console.log(error);
        throw new Error("Internal Server Error (cloudinary)");
    }
  };

  export default {
    cloudinaryUploadImage,
    cloudinaryRemoveImage,
    cloudinaryRemoveMultipleImage,
  };