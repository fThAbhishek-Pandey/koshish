import mongoose from 'mongoose';
export const prizeSchema = new mongoose.Schema({
  PrizeHeading: {
    type: String,
    require: true,
  },
  email:{
        type:String,
        default:"koshish@life",
        unique:false
  },
  IstPrize: {
    type: String,
    default:"NON"
  },
  IIndPrize: {
    type: String,
    default:"NON"
  },
  IIIrdPrize: {
    type: String,
    default:"NON"
  },
  para: {
    type: String,
    require: true,
    default:"NON"
  },
});
