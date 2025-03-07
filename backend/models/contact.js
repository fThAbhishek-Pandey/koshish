import mongoose from "mongoose";
const contactSchema =  new mongoose.Schema({
    name :{
            type: String,
            require: true
    },
            email:{
                type: String,
                require: true,
                unique: true
            },
            loca:{
                type: String,
                require: true
            },
            heading:{
                type: String,
                require: true
            },
            para:{
                type: String,
                require: true
            }
})

export const ContactModel = mongoose.model('contactModel', contactSchema)