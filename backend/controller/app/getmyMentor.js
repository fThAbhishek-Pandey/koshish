import TeacherModel from "../../models/teacher/teacherSchema.js";



const getmyMentor =async (req,res) => {
  try {
    const {id} = req.body
    console.log("myid: ", id)
    if(!id) {
        return res.json ({success:false, message: "please fill valid id"})
    }
    const data = await TeacherModel.findById(id);
    console.log("---> ",  data)
    res.json({success:true, data: data, message: `Mentor fond id: ${id}`});

  } catch (error) {
     console.log(error)
     res.json({success:false , message: error.message});
  }
}

export default getmyMentor