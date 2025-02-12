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
      required: true,
    },
    speciality: {
      type: String,
      required: true,
    },
    degree: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      required: true,
    },
    date: {
      type: Number,
      required: true,
    },
    
  },
  { minimize: false }
);
const CocicularModel =
  mongoose.models.Cocicular || mongoose.model("doctor", CocicularSchema);
export default CocicularModel;