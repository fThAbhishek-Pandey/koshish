import validator from "validator";
import bycrypt from "bcrypt";
import { v2 as cloudinary } from "cloudinary";
import CocicularModel from "../../models/Cocirculer/cocerculerProfile.js";
const changecocirculer = async (req,res) => {
    console.log("i am in change cocirculer controller");
    try {
      const {
        name,
        email,
        password,
        speciality,
        about,
        address,
      } = req.body;
    //   const imagefile = req.file;
      console.log(
        name,
        email,
        password,
        speciality,
        about,
        address,
        // imagefile
      );
      // checking for all data for docotor
      if (
        !name ||
        !email ||
        !password ||
        !speciality ||
        !about ||
        !address
      )
        return res.json({ success: false, msg: `fill all required field` });
      //  validating email formate
      if (!validator.isEmail(email)) {
        return res.json({
          success: false,
          message: "Please enter a valid email",
        });
      }
      //  validating strong password
      if (password.length < 8) {
        return res.json({
          success: false,
          message: "please enter valid password",
        });
      }
    //   if (!imagefile) {
    //     return res.json({ success: false, message: "Please upload an image" });
    // }
    
      //  hasing doctor password
      const salt = await bycrypt.genSalt(10);
      const hashPassword = await bycrypt.hash(password, salt);
      console.log("hashpassword", hashPassword);
      //  upload image to cloudnary
  
    //   const imageUpload = await cloudinary.uploader.upload(imagefile.path, {
    //     resource_type: "image",
    //   });
    //   const imageURL = imageUpload.secure_url;
      //  save in our database
  
      const cocircularData = {
        name,
        email,
        // image: imageURL,
        password: hashPassword,
        speciality,
        about,
        address: address,
        date: Date.now(),
      };
      console.log(cocircularData)
      const newCocirculer = new CocicularModel(cocircularData);
      await newCocirculer.save();
      res.json({ success: true, meg: "love u Abhishek" });
    } catch (error) {
      console.log(error);
  
      res.json({ success: false, msg: error.message, where: "i am change coordinater" });
    }
}

export default changecocirculer
