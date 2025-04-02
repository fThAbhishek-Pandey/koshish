import mongoose from "mongoose";

const homeEventsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  date:{
    type: Date, 
    required:true
  },
  desc: {
    type:String,
    required:true
  },
  thumbnail:{
    type:String,
    required:true
  },
  isActive:{
    type:Boolean,
    default:true
  },
  isTop:{
    type:Boolean,
    default:false
  }
});


export const homeEventsModel = mongoose.model('homeEventsModel', homeEventsSchema);
