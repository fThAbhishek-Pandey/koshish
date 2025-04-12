import mongoose from "mongoose";
import {prizeSchema} from "./Prize.js";
import { particpentSchema } from "./participantSchema.js";
const homeEventsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  startdate:{
    type: Date, 
    required:true
  },
  particpent:[particpentSchema],
  endDate:{
    type: Date, 
    required:true
  },
  registrationOpen:{
    type:Boolean,
    required:true
  },
  prize: prizeSchema,
  team: {
    type:Boolean,
    default:true
  },
  desc: {
    type:String,
    required:true
  },
  thumbnail:{
    type:String,
    required:true
  },
  mode:{
    type:Boolean,
    default:true
  },
  isActive:{
    type:Boolean,
    default:true
  },
  isPrize :{
    type:Boolean,
    default:false
  },
  isCertification:{
    type: Boolean,
    default:false
},
  isTop:{
    type:Boolean,
    default:false
  }
});


export const homeEventsModel = mongoose.model('EventModel', homeEventsSchema);
