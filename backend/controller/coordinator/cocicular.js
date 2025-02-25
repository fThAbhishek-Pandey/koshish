import validator from "validator";
import bycrypt from "bcrypt";
import {cloudinaryUploadImage} from "../../middleware/cloudimage/cloudinary.js";
import changeCocercular  from "../../repositories/coordinator/changeco-cercular.js";
const changecocirculer = async (req, res) => {
  console.log("i am in change cocirculer controller", req.body, req.file);
  try {
    const { name, email, password, speciality, about, address } = req.body;
    const imgfile = req.file;
    console.log("imagefile", imgfile);
    console.log(
      "all request resourse",
      name,
      email,
      password,
      speciality,
      about,
      address
    );
    // checking for all data for docotor
    if (!name || !email || !password || !speciality || !about || !address)
      return res.json({ success: false, message: `fill all required field` });
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

    //  hasing doctor password
    const salt = await bycrypt.genSalt(10);
    const hashPassword = await bycrypt.hash(password, salt);
    console.log("hashpassword", hashPassword);
    //  upload image to cloudnary
    const imageUpload = cloudinaryUploadImage(imgfile)
      .then(() => console.log("file is upload on cloud"));
    //  save in our database
    console.log("i am uploaded img : ",imageUpload)
    const cocircularData = {
      name,
      email,
      image: imageUpload.secure_url,
      password: hashPassword,
      speciality,
      about,
      address: address,
      date: Date.now(),
    };
    console.log(cocircularData);

    if(imageUpload){
    // const newCocirculer = new CocicularModel(cocircularData);
    // await newCocirculer.save();
   await changeCocercular(cocircularData)
    
    res.json({ success: true, meg: "love u Abhishek" });
  }
  else res.json({success:false , message: "image is not uploaded yet"})
  } catch (error) {
    console.log(error);

    res.json({
      success: false,
      msg: error.message,
      where: "i am change coordinater",
    });
  }
};

export default changecocirculer;
