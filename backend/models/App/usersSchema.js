import mongoose from 'mongoose'
import validator from 'validator'

const userSchema = new mongoose.Schema({
    email :{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        validate: [validator.isEmail, "Please provide a valid email"],
    },
    password: {
    type: String,
    required: true,
    minlength: 8,
    },

})

export const AdminLogin = mongoose.model('Admin Login', userSchema);
export const Student = mongoose.model('Student Login', userSchema);
export const Teacher = mongoose.model('Teacher Login', userSchema);