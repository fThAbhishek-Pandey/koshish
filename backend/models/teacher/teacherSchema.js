import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  image:{
    type:String,
    required:true
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
    default: new Date.now()
  },
  speciality:{
    type:String,
    required:true,

  },
  about:{
    type: String,
    default:"I love Koshish"
  }
});


export const Teacher = mongoose.model('Teacher', teacherSchema);