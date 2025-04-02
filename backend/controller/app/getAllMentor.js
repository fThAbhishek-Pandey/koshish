import { AllMentorDB } from "../../repositories/cocircular/mentor.js";



const getAllMentor =async (req,res) => {
  try {
    const data = await AllMentorDB();
    const sendData = data.map((item)=>{
      const {_id, name,linkedin,image,speciality,quote,joinTime,} = item;
   return  {_id, name,linkedin,image,speciality,quote,joinTime};
});
    res.json({success:true, data: sendData, message: "All Mentor fond"});

  } catch (error) {
     console.log(error)
     res.json({success:false , message: error.message});
  }
}

export default getAllMentor