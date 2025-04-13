import TeacherModel from "../../models/teacher/teacherSchema.js";
const getAllMentor =async (req,res) => {
  try {
    const data = await TeacherModel.find({isActive:true});
    const sendData = data.map((item)=>{
      const {_id, name,linkedin,image,speciality,quote,joinTime,} = item;
   return  {_id, name,linkedin,image,speciality,quote,joinTime};
});
    res.json({success:true, data: sendData.reverse(), message: "All Mentor found"});

  } catch (error) {
     console.log(error)
     res.json({success:false , message: error.message});
  }
}
const getAllAlumni =async (req,res) => {
  try {
    const data =  await TeacherModel.find({isActive:false});
    const sendData = data.map((item)=>{
      const {_id, name,linkedin,image,speciality,quote,joinTime,} = item;
   return  {_id, name,linkedin,image,speciality,quote,joinTime};
});
    res.json({success:true, data: sendData.reverse(), message: "All Alumni found"});

  } catch (error) {
     console.log(error)
     res.json({success:false , message: error.message});
  }
}

export {getAllMentor,getAllAlumni}