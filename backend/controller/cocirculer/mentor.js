import  {cloudinaryUploadImage}  from '../../middleware/cloudimage/cloudinary.js'
import { addMentorDB, terminateMentorDB, AllMentorDB}   from '../../repositories/cocircular/mentor.js'
const addMentor = async(req, res ) => {
   try {
          const {name,email,subject,classTeacher,speciality, about}= req.body;
          if(!name|| !email|| !subject || !classTeacher|| !speciality|| !about){
            res.json({success:false, message:"fill all details"})
          }
          const mentorImg = req.file
        //    save on cloudnary
         if(!mentorImg){
            res.json({success:false, message:"please upload mentor image"});
         }
         const mentorData ={
          name,email,subject,classTeacher,speciality, about
          
         }
          await  cloudinaryUploadImage(mentorImg)
          .then (async (data)=>{
             mentorData.push(image ,data.secure_url)
             await  addMentorDB(mentorData)
             .then (()=>{
               res.json({success: true, message: "Mentor is added"});
             })
          })
          
   } catch (error) {
            console.log(error)
            res.json({success:true, message: error.message})
   }
}

const terminateMentor = async (req,res)=>{
  try {
    await terminateMentorDB()
    .then (()=>{
       res.json ({success:true, message: "Mentor is terminated"});
    })
  } catch (error) {
           console.log(error)
           res.json({success:true, message: error.message})
  }
}
const AllMentor = async()=>{
  try {
     await AllMentorDB () .then(
      (data)=>{
        return res.json({success:true, data});
      }
      
     ) ;
  } catch (error) {
           console.log(error)
           res.json({success:true, message: error.message})
  }
}

const updateMentor = async(req, res)=>{
      try {
        
      } catch (error) {
        console.log(error)
        res.json({success:true, message: error.message})
      }
}
export { addMentor, terminateMentor, AllMentor, updateMentor}