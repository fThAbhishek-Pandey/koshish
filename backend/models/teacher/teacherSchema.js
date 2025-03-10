import mongoose from "mongoose";
import defaultImg from "../../controller/defaultimg.js";
const teacherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
  },
  image:{
    type:String,
    default:defaultImg
  },
  subject: {
    type: String,
    required: true
  },
  classTeacher: {
     type: String,
     required: true,
     unique: true,
  },
  joinTime:{
    type: Date,
    default:Date.now ()
  },
  speciality:{
    type:String,
    required:true,

  },
  isActive:{
    type: String ,
    default:true
  },
  quote:{
      type:String,
      require:true
  }, 
  aboutHead:{
      type: String,
      require: true
  }, 
  about:{
    type: String,
    default:"I love Koshish"
  }
});
const TeacherModel = mongoose.model('TeacherModel', teacherSchema);

export default  TeacherModel;