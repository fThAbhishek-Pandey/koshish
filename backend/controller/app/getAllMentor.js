import { AllMentorDB } from "../../repositories/cocircular/mentor.js";



const getAllMentor =async (req,res) => {
  try {
    const data = await AllMentorDB();
    console.log("---> ",  data)
    res.json({success:true, data: data, message: "All Mentor fond"});

  } catch (error) {
     console.log(error)
     res.json({success:false , message: error.message});
  }
}

export default getAllMentor