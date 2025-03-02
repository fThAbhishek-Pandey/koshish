
import { TopmentorModel } from "../../models/App/top-mentor.js"
const getTopmentor = async(req,res) => {
  try {
       const data = await TopmentorModel.find({});
       res.json({success:true, message:"finding Topmentor succesffuly", data:data.reverse() })
  } catch (error) {
     console.log(error)
     res.json({success:false, message:error.message})
  }
}

export default getTopmentor