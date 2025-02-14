import mongoose from "mongoose";


const teacherSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
        maxLength: [30,"Name is too long, try shorter names"]
    },
    branch:{
        type: String,
        required: true,
    },
    classesAlloted: [{
        type: String,
        required: true,
    }],
    phone : {
        type: String,
        required: true,
    },
    subjects : [{
                type: String,
    }],
    createdAt: {
        type: String,
    },
    passingYear: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    email : {
        type : String,
        required : true,
        default : "abc@gmail.com"
    },
    password : {
        type : String,
        required : true,
        password : "24234fvdfv"
    }
});
const Teacher = mongoose.model("Teacher",teacherSchema);

export default Teacher;