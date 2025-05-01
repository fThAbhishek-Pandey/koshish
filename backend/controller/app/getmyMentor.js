
import MemberModel from "../../models/member/MemberSchema.js";
const getmyMentor =async (req,res) => {
  try {
    const {id} = req.body
    console.log("myid: ", id)
    if(!id) {
        return res.json ({success:false, message: "please fill valid id"})
    }
    const data = await MemberModel.findById(id);
    const {name,linkedin,image,speciality,yog,isActive,quote,aboutHead,about, classTeacher,subject,leaveTime,joinTime,}=data;
    const sendData = {name,linkedin,yog,image,isActive,speciality,quote, aboutHead,about, classTeacher,subject,leaveTime,joinTime,}
    console.log("---> ",  data)
    res.json({success:true, data: sendData, message: `Mentor fond id: ${id}`});

  } catch (error) {
     console.log(error)
     res.json({success:false , message: error.message});
  }
}

export default getmyMentor