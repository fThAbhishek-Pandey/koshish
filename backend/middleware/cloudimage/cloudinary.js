import ConnectCloudinary from "../../config/cloudinary";
ConnectCloudinary();

  // Cloudinary Upload Image
const cloudinaryUploadImage = async (fileToUpload) => {
    try {
      const data = await cloudinary.uploader.upload(fileToUpload, {
        resource_type: "auto",
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Internal Server Error (cloudinary)");
    }
  };

  // Cloudinary Remove Image
const cloudinaryRemoveImage = async (imagePublicId) => {
    try {
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

  module.exports = {
    cloudinaryUploadImage,
    cloudinaryRemoveImage,
    cloudinaryRemoveMultipleImage,
  };