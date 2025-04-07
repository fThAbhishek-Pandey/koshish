
import  TeacherModel  from "../../models/teacher/teacherSchema.js"
const getTopmentor = async(req,res) => {
  try {
       const data = await TeacherModel.find({isTop:true});
       res.json({success:true, message:"finding Topmentor succesffuly", data:data.reverse() })
  } catch (error) {
     console.log(error)
     res.json({success:false, message:error.message})
  }
}

export default getTopmentor