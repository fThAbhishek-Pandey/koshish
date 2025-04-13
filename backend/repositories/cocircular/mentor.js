
import TeacherModel from '../../models/teacher/teacherSchema.js'

const addMentorDB = async(mentorData)=>{
   console.log(mentorData)
   const newMentor =  await  TeacherModel.create(mentorData);
    await newMentor.save()
}

const terminateMentorDB = async(id)=>{
    console.log("terminate", id);
      const {isActive} =await TeacherModel.findById(id)
       await  TeacherModel.findByIdAndUpdate(id, {isActive:!isActive})
}
const topMentorDB = async(id)=>{
    const {isTop} = await TeacherModel.findById(id)

    await  TeacherModel.findByIdAndUpdate(id, {isTop: !isTop})
}
const AllMentorDB = async ()=>{
   try {
      const data = await TeacherModel.find({});
      console.log(data);
      return data.reverse()
   } catch (error) {
      console.log("AllMentorDB :", error)
   }
   
   
//    const myData = 
  
}
const mentorByIdDB = async (id)=>{
   const data = await TeacherModel.findById(id);
   console.log(data);
//    const myData = 
   return data
}
const AllAlumniDB = async ()=>{
   const data = await TeacherModel.find({isActive:false});
   console.log(data);
//    const myData = 
   return data.reverse()
}
const updateMentor = async (id, data)=>{
   try {
      await  TeacherModel.findByIdAndUpdate(id, data)
      .then(updatedUser => {
         if (updatedUser) {
           console.log('User updated successfully:', updatedUser);
         } else {
           console.log('User not found');
         }
       })
       .catch(error => {
         console.error('Error updating user:', error);
       });
   } catch (error) {
      console.log(error);
   }
    
}
export {
    addMentorDB,
    terminateMentorDB,
    AllMentorDB,
    updateMentor,
    AllAlumniDB,
    mentorByIdDB,
    topMentorDB
}