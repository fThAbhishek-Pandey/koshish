import mongoose from "mongoose";
import defaultImg from "../../controller/defaultimg.js";
const MemberSchema = new mongoose.Schema({
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
  isVisionary:{
    type: Boolean ,
    default:false
  },
  isActive:{
    type: Boolean ,
    default:false
  },
  isTop:{
    type: Boolean ,
    default:false
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
const MemberModel = mongoose.model('TeacherModel', MemberSchema);

export default  MemberModel;