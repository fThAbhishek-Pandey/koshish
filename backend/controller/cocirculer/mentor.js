
const addMentor = async(req, res ) => {
   try {
          const {name,email,subject,classTeacher,speciality, about}= req.body;
          if(!name|| !email|| !subject || !classTeacher|| !speciality|| !about){
            res.json({success:false, message:"fill all details"})
          }
          const mentorImg = req.file
        //    save on cloudnary
        

   } catch (error) {
            console.log(error)
            res.json({success:true, message: error.message})
   }
}

export default addMentor