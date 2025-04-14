import mongoose from "mongoose";
import PhotoSchema from "./photoSchema.js";
const GallerySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  date:{
    type: Date, 
    required:true
  },
  Photo:[PhotoSchema],
  desc: {
    type:String,
    required:true
  },
  thumbnail:{
    type:String,
    required:true
  },
  isNews :{
    type:Boolean,
    default:false
  },
  isActive:{
    type:Boolean,
    default:true
  },
  
});


export const GalleryModel = mongoose.model('GalleryModel', GallerySchema);
