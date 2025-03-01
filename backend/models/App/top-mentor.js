import mongoose from "mongoose";
const TopmentorScheema = new mongoose.Schema({
    name : {
        type: String,
        require: true
    },
    LindinLink:{
        type: String,
        require: true
    },
    email:{
        type:String,
        require:true
    },
    year:{
        type:String,
        requre:true,
    },
    speciality:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    }

})

export const TopmentorModel = mongoose.model('TopmentorModel',TopmentorScheema)