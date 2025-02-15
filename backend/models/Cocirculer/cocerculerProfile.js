import mongoose from "mongoose";

const CocicularSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    speciality: {
      type: String,
      required: true,
    },
    degree: {
      type: String,
      // required: true,
      default:"B.tech"
    },
    about: {
      type: String,
      required: true,
    },
    date: {
      type: Number,
      required: true,
    },
    isactive :{
      type: Boolean,
      default:true
    }
  },
  { minimize: false }
);
const CocicularModel =
  mongoose.models.Cocicular || mongoose.model("Cocicular", CocicularSchema);
export default CocicularModel;