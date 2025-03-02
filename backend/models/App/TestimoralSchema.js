import mongoose from 'mongoose'
import defaultImg from '../../controller/defaultimg'
const TestimoralSchema = new mongoose.Schema({
    image: {
        type:String,
        default:defaultImg,
    },
    headline:{
        type: String,
        require:true
    },
    heading:{
        tpye: String,
        require: true
    },
    linked:{
        type: String,
        require:true
    }
})

export const TestimoralModel = mongoose.model('TestimoralModel',TestimoralSchema)