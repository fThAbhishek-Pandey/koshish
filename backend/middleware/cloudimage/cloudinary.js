import {v2 as cloudinary} from 'cloudinary'
  // Cloudinary Upload Image
import fs from 'fs'
const cloudinaryUploadImage =  async(fileToUpload) => {
    try {
      // console.log('i am cloudnaryupload function', fileToUpload);
      if (!fileToUpload) return null;
      const data = await cloudinary.uploader.upload(fileToUpload.path, {
        resource_type: "auto",
      })
      fs.unlink(fileToUpload.path, (err) => {
        if (err) {
            console.error("Error deleting temp file:", err);
        } else {
            console.log("Temporary image deleted:", fileToUpload.path);
        }
    });
      console.log("data : ",data);
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Internal Server Error (cloudinary)",error);
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
      console.log(publicIds);
      const result = await cloudinary.api.delete_resources(publicIds)
      return result;
    } catch (error) {
      console.log(error);
        throw new Error("Internal Server Error (cloudinary)");
    }
  };

  export  {
    cloudinaryUploadImage,
    cloudinaryRemoveImage,
    cloudinaryRemoveMultipleImage,
  };