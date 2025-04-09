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
  linkedin: {
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
  },
  joinTime:{
    type: Date,
    default:Date.now ()
  },
  leaveTime:{
    type: Date,
    default:new Date(1552261496289)
  },
  speciality:{
    type:String,
    required:true,

  },
  isActive:{
    type: String ,
    default:true
  },
  isTop:{
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
  yog:{
      type: Number,
      default: 2026
  } ,
  about:{
    type: String,
    default:"I love Koshish"
  }

});
const TeacherModel = mongoose.model('TeacherModel', teacherSchema);

export default  TeacherModel;