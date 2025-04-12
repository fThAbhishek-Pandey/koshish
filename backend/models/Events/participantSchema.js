import mongoose from "mongoose";
export const particpentSchema =  new mongoose.Schema({
    name :{
            type: String,
    },
            email:{
                type: String,
                default:"koshish",
                require:false
            },
            loca:{
                type: String,
            },
            heading:{
                type: String,
            },
            para:{
                type: String,
            }
})

// export const ParticipentModel = mongoose.model('ParticipentModel', particpentSchema)