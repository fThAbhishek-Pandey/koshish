import mongoose from "mongoose";

const PhotoSchema = new mongoose.Schema({
  tittle: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  image:{
    type:String,
    required:true
  },
  isActive:{
    type:Boolean,
    default:true
  },
 
});


export default PhotoSchema
