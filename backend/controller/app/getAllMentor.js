
import MemberModel from "../../models/member/MemberSchema.js";
const getAllMentor =async (req,res) => {
  try {
    const data = await MemberModel.find({isActive:true, isVisionary:false});
    const sendData = data.map((item)=>{
      const {_id, name,linkedin,yog,image,speciality,quote,joinTime,} = item;
   return  {_id, name,linkedin,image,yog,speciality,quote,joinTime};
});
    res.json({success:true, data: sendData.reverse(), message: "All Mentor found"});

  } catch (error) {
     console.log(error)
     res.json({success:false , message: error.message});
  }
}
const getAllAlumni =async (req,res) => {
  try {
    const data =  await MemberModel.find({isActive:false,isVisionary:false });
    const sendData = data.map((item)=>{
      const {_id, name,linkedin,image,yog,speciality,quote,joinTime,} = item;
   return  {_id, name,linkedin,image,yog,speciality,quote,joinTime};
});
    res.json({success:true, data: sendData.reverse(), message: "All Alumni found"});

  } catch (error) {
     console.log(error)
     res.json({success:false , message: error.message});
  }
}
const getAllFaculty =async (req,res) => {
  try {
    const data =  await MemberModel.find({isVisionary:true});
    const sendData = data.map((item)=>{
      const {_id, name,linkedin,image,speciality,quote,joinTime,} = item;
   return  {_id, name,linkedin,image,speciality,quote,joinTime};
});
    res.json({success:true, data: sendData.reverse(), message: "All Visionary found"});

  } catch (error) {
     console.log(error)
     res.json({success:false , message: error.message});
  }
}
const SearchMembers =async (req,res) => {
  try {
    const {name} = req.body
    if(!name) {
      return res.json({success:false, message:"please enter a member name"});
    }

     // Use a regular expression to search for movies starting with the input letters
  const regex = new RegExp(`^${name}`, 'i');
   await MemberModel.find({ name: { $regex: regex } })
    .then((members) => {
      if (!members || members.length === 0) {
        return res.json({success:false,data:[], message: "No Member found" });
      }
      const sendData = members.map((item)=>{
        const {_id, name,linkedin,yog,image,speciality,quote,joinTime,} = item;
     return  {_id, name,linkedin,yog,image,speciality,quote,joinTime};
  });
      return res.status(200).json({ success: true, data: sendData,message: "members found" });
    })
    .catch((err) => {
      return res.status(500).json({ success:false, message: err.message });
    });

  } catch (error) {
     console.log(error)
     res.json({success:false , message: error.message});
  }
}

export {getAllMentor,getAllAlumni,getAllFaculty,SearchMembers}