import  {cloudinaryUploadImage, cloudinaryRemoveImage }  from '../../middleware/cloudimage/cloudinary.js'
import { addMentorDB, terminateMentorDB, AllMentorDB,updateMentor,mentorByIdDB,topMentorDB}   from '../../repositories/cocircular/mentor.js'
const addMentor = async(req, res ) => {
   try {
          const {name,email,subject,isActive, isVisionary, isTop,classTeacher,linkedin,speciality,quote, aboutHead, about}= req.body;
          if(!name|| !email|| !subject || !linkedin|| !classTeacher|| !speciality|| !about || !quote || !aboutHead){
            console.log(name,email,subject,isActive, isVisionary, isTop,classTeacher,speciality,linkedin, about)
            res.json({success:false, message:"fill all details"})
          }
          const mentorImg = req.file
        //    save on cloudnary
         if(!mentorImg){
            res.json({success:false, message:"please upload mentor image"});
         }
         const mentorData ={
          name,email,subject,classTeacher,isActive, isVisionary, isTop,speciality,linkedin, about,quote, aboutHead
          
         }
        const imageData=   await  cloudinaryUploadImage(mentorImg)
        await  addMentorDB({...mentorData,image: imageData.secure_url })
         res.json({success:true,message: "New teacher is added"}) 
   } catch (error) {
            console.log(error)
            res.json({success:true, message: error.message})
   }
}

const terminateMentor = async (req,res)=>{
  try {
    const {id} = req.params
    await terminateMentorDB(id)
    .then (()=>{
       res.json ({success:true, message: "Mentor is terminated"});
    })
  } catch (error) {
           console.log(error)
           res.json({success:true, message: error.message})
  }
}
const TopMentor = async (req,res)=>{
  try {
    const {id} = req.params
    await topMentorDB(id)
    .then (()=>{
       res.json ({success:true, message: "Mentor is Now top"});
    })
  } catch (error) {
           console.log(error)
           res.json({success:true, message: error.message})
  }
}
const AllMentor = async(req,res)=>{
  try {
    console.log("i am all mentor");
    const data =  await AllMentorDB () 
     return res.json({success:true, data, message : "All Mentor is find"});
  } catch (error) {
           console.log(error)
           res.json({success:false, message: error.message})
  }
}

const getMentorById = async(req,res)=>{
  try {
    const {id} =  req.params
    const data = await  mentorByIdDB(id);
     return res.json({success:true, data, message : "Mentor find by id"});
  } catch (error) {
           console.log(error)
           res.json({success:true, message: error.message})
  }
}

const updateMentorById = async( req , res)=>{
      try {
        const {id} = req.params
         const { name,imgurl ,subject,yog,joinTime,isActive, isVisionary, isTop,classTeacher,speciality,linkedin, about,quote, aboutHead } = req.body;
          console.log("updateMentorById",req.body)
         console.log("i am update by Id: ",id)
         const imagefile = req.file
         if(imagefile){
          console.log("imgurl ",imgurl)
          // await cloudinaryRemoveImage(imgurl);
          const imageData =   await  cloudinaryUploadImage(imagefile)
          await updateMentor(id, { name,image:  imageData.secure_url ,isActive, isVisionary, isTop,subject,yog,joinTime,classTeacher,speciality,linkedin, about,quote, aboutHead })
       }
       else {
        await updateMentor(id, { name ,subject,yog,isActive, isVisionary, isTop,joinTime, classTeacher,speciality,linkedin, about,quote, aboutHead })
       }
       
      
      res.json({success:true, message : "successfully updated"})

      } catch (error) {
        console.log(error)
        res.json({success:true, message: error.message})
      }
}
export { addMentor, terminateMentor, AllMentor, updateMentorById,getMentorById,TopMentor}