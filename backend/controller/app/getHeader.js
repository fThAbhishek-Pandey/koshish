import { headerModel } from "../../models/App/headerSchema.js"

const getHeader = async(req,res) => {
  try {
      const data = await headerModel.find({});
      console.log(data);
      res.json({success:true, message:"get all topmentor", data})
   } catch (error) {
      console.log(error)
      res.json ({success:false, message:error.message});
   }
  
}

export default getHeader