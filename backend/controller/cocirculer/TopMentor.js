import { TopmentorModel } from '../../models/App/top-mentor.js'
import { cloudinaryUploadImage } from '../../middleware/cloudimage/cloudinary.js'
const addTopMentor = async (req, res) => {
     try {
        const {name,email,speciality,linkedinURL,year } =req.body
        const imagefile= req.file
        if (!name || !email || !speciality || !linkedinURL|| !year) {
            return res.json({success:true, message:"fill all data"})
        }
        if (!imagefile){
            return res.json({success:true, message:"please upload top Mentor"})
        }
     const image = await cloudinaryUploadImage(imagefile);
    const TopMentor= await  TopmentorModel.create({name,email,speciality,linkedinURL,year,image:image.secure_url})
    await  TopMentor.save()
    return res.json({success:true, message: "Top Mentor Add successfully"});
     } catch (error) {
        return res.json({success:false, message: error.message});
     }
}

export { addTopMentor}