import { v2 as cloudinary } from "cloudinary";
import CocicularModel from "../../models/Cocirculer/cocerculerProfile.js";
const updatecocerculerprofile = async(req,res) => {
    console.log("i am in update cocirculer controller");
    try {
      const {
        email,
        speciality,
        about,
        address,
      } = req.body;
    //   const imagefile = req.file;
      console.log(
        speciality,
        about,
        address,
        // imagefile
      );
      // checking for all data for docotor
      if (
        !email ||
        !speciality ||
        !about ||
        !address
      )
        return res.json({ success: false, msg: `fill all required field` });
     
    //   if (!imagefile) {
    //     return res.json({ success: false, message: "Please upload an image" });
    // }

      //  upload image to cloudnary
  
    //   const imageUpload = await cloudinary.uploader.upload(imagefile.path, {
    //     resource_type: "image",
    //   });
    //   const imageURL = imageUpload.secure_url;
      //  save in our database
  
      const cocircularData = {
        // image: imageURL,
        speciality,
        about,
        address: address,
        date: Date.now(),
      };
      console.log(cocircularData)
    //   const newCocirculer = new CocicularModel(cocircularData);
    //   await newCocirculer.save();
    const update = await CocicularModel.findOneAndUpdate({email},cocircularData);
    if (update)  res.json({ success: true, meg: "love u Abhishek" });
    else res.json({ success: false, meg: "some error" });
    } catch (error) {
      console.log(error);
  
      res.json({ success: false, msg: error.message, where: "i am update cocirculer" });
    }
}

export default updatecocerculerprofile