import mongoose from "mongoose";

const CoordinatorSchema = new mongoose.Schema(
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
const CoordinatorModel =
  mongoose.models.Coordinator || mongoose.model("doctor", CoordinatorSchema);
export default Coordinator;