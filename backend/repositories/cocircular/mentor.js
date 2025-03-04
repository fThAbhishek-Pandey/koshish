
import TeacherModel from '../../models/teacher/teacherSchema.js'

const addMentorDB = async(mentorData)=>{
     console.log(mentorData)
   const newMentor =  await  TeacherModel.create(mentorData);
    await newMentor.save()
}

const terminateMentorDB = async(email)=>{
       TeacherModel.updateOne(email, {isActive: false})
}
const AllMentorDB = async ()=>{
   const data = await TeacherModel.find({});
   console.log(data);
//    const myData = 
   return data.reverse()
}
const updateMentor = ()=>{

}
export {
    addMentorDB,
    terminateMentorDB,
    AllMentorDB,
    updateMentor
}