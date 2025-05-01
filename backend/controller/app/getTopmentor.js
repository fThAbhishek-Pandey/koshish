
import MemberModel from "../../models/member/MemberSchema.js";
const getTopmentor = async(req,res) => {
  try {
       const data = await MemberModel.find({isTop:true, isActive:true});
       const sendData = data.slice(-4).map((item)=>{
        const {_id, name,linkedin,image,speciality,quote,joinTime,} = item;
     return  {_id, name,linkedin,image,speciality,quote,joinTime};
  });
       res.json({success:true, message:"finding Topmentor succesffuly", data:sendData })
  } catch (error) {
     console.log(error)
     res.json({success:false, message:error.message})
  }
}
const getCoordi = async(req,res) => {
   try {
        const data = await MemberModel.find({isTop:true, isActive:true, isVisionary:true});
         if (data.length ==0) 
            return res.json({success:true, message:"No co-ordinator succesffuly", data:false })
         const {_id, name,linkedin,image,speciality,quote,joinTime} = data.at(-1);
         const sendData = {_id, name,linkedin,image,speciality,quote,joinTime};
  
       return  res.json({success:true, message:"finding co-ordinator succesffuly", data:sendData })
   } catch (error) {
      console.log(error)
      res.json({success:false, message:error.message})
   }
 }
export {getTopmentor,getCoordi}