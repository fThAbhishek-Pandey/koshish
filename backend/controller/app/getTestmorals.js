import { TestimoralModel } from "../../models/App/TestimoralSchema.js"

const getTestmorals = async(req,res) => {
   try {
       const data = await TestimoralModel.find({})
       res.json({success:true, message:"find all testimoral successfully", data})
   } catch (error) {
      console.log(error)
      res.json({success:false, message: error.message})
   }
}

export default getTestmorals