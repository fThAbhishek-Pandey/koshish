
import  TeacherModel  from "../../models/teacher/teacherSchema.js"
const getTopmentor = async(req,res) => {
  try {
       const data = await TeacherModel.find({isTop:true, isActive:true});
       const sendData = data.slice(-4).map((item)=>{
        const {_id, name,linkedin,image,speciality,quote,joinTime,} = item;
     return  {_id, name,linkedin,image,speciality,quote,joinTime};
  });
       res.json({success:true, message:"finding Topmentor succesffuly", data:sendData.reverse() })
  } catch (error) {
     console.log(error)
     res.json({success:false, message:error.message})
  }
}

export default getTopmentor