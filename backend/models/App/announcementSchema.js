import mongoose from "mongoose";

const announcementSchema = new mongoose.Schema({
    announcement: {
    type: String,
    required: true
  },
     isAtive :{
      type: Boolean,
      default :true
  }, 
    heading:{
     type:String,
     required:true
  },
  image:{
    type:String,
    required:true
  },
  date:{
    type:Date,
    required:true
  }
});

export const Announcement = mongoose.model('Announcement', announcementSchema);