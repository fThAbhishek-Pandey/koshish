import mongoose from "mongoose";

const homeEventsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  date:{
    type: String, 
    required:true
  },
  desc: {
    type:String,
    required:true
  },
  thumbnail:{
    type:String,
    required:true
  }
});


export const homeEventsModel = mongoose.model('homeEventsModel', homeEventsSchema);
