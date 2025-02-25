import mongoose from "mongoose";
import TeacherModel from '../../models/teacher/teacherSchema.js'

const addMentorDB = async(mentorData)=>{
     console.log(mentorData)
    await  TeacherModel.insertOne(mentorData);
}

const terminateMentorDB = async(email)=>{
       TeacherModel.updateOne(email, {isActive: false})
}
const AllMentorDB = async ()=>{
   const data = await TeacherModel.find({});
   console.log(data);
   return data.reverse
}
const updateMentor = ()=>{

}
export {
    addMentorDB,
    terminateMentorDB,
    AllMentorDB,
    updateMentor
}