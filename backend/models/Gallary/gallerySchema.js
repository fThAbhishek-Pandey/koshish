import mongoose from "mongoose";
import PhotoSchema from "./photoSchema.js";
const GallerySchema = new mongoose.Schema({
  galleryTitle: {
    type: String,
    required: true
  },
  date:{
    type: Date, 
    required:true
  },
  Photo:[PhotoSchema],
  galleryDescription : {
    type:String,
    required:true
  },
  thumbnail:{
    type:String,
    required:true
  },
 youtube:{
  type:String,
  default:false
 },
 linkedin:{
  type:String,
  default:false
 }, 
 googlePhoto:{
  type:String,
  default:false
 },
 instagram:{
  type:String,
  default:false
 },
 facebook:{
  type:String,
  default:false
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
