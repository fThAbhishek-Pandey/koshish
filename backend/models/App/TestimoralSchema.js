import mongoose from 'mongoose'
import defaultImg from '../../controller/defaultimg.js'
const TestimoralSchema = new mongoose.Schema({
    image: {
        type:String,
        default:defaultImg,
    },
    name:{
        type: String,
        require:true
    },
    headline:{
        type: String,
        require:true
    },
   
    linkedin:{
        type: String,
        require:true
    },
    isActive:{
        type:Boolean,
        default:true
    },
    about:{
        type:String,
        require:true
    }

})

export const TestimoralModel = mongoose.model('TestimoralModel',TestimoralSchema)