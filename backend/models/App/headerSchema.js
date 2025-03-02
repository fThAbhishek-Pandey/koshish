import mongoose from "mongoose";
const headerScheema = new mongoose.Schema({
      image: {
        type:String,
        require:true
      },
      heading :{
        type: String,
        require: true,
      },
     para:{
        type:String,
        require:true
     }

})
export const headerModel= mongoose.model('headerModel',headerScheema )