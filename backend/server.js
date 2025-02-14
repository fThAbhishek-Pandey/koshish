import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import ConnectCloudinary from './config/cloudinary.js';
import ConnectDB from './config/connectMongodb.js';

ConnectDB()
ConnectCloudinary()
app config
const app = express();
const port = process.env.PORT ||4000


//  middleware
app.use(cors());
// app.use(express.json());

//  APIs endpoints


// app.get('/', (req,res)=>{
//     res.send('Api is working')
// });
// app.listen (port, ()=>console.log("server is started",port));

// import express from "express";
import mongoose from "mongoose";
import methodOverride from "method-override";
import path from "path";
import { fileURLToPath } from "url";
import main from "./config/connectMongodb.js";
import Teacher from "./models/teacher.js";
// import ExpressError from "./ExpressError.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

await main(); // Connecting to MongoDB

const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

// Count Total Teachers
app.get("/teachers", async (req, res, next) => {
    try {
        abcd = abcd
        
        const totalTeachers = await Teacher.countDocuments();
        res.json({ totalTeachers });
    } catch (err) {
        res.send({success: false, message: err.message})
       
    }
});

// Total Active Teachers
app.get("/activeTeachers", async (req, res, next) => {
    try {
        const activeTeachers = await Teacher.countDocuments({ isActive: true });
        res.json({ activeTeachers });
    } catch (err) {
        res.send({success: false, message: err.message});
    }
});

// Index Route to Show All Teachers
app.get("/allteachers", async (req, res, next) => {
    try {
        let allteachers = await Teacher.find();
        console.log(allteachers);
        res.json({allteachers});
    } catch (err) {
        res.send({success: false, message: err.message});
    }
});

// Route to Find Teachers by Name
app.get("/teacher", async (req, res, next) => {
    try {
        let { name } = req.query;
        let teachers = await Teacher.find({ name });
        console.log(teachers);
        res.json({ teachers });
    } catch (err) {
        res.send({success: false, message: err.message});
    }
});

// Update Form
// app.get("/updateTeacher/:id", async (req, res, next) => {
//     try {
//         let { id } = req.params;
//         let teacher = await Teacher.findById(id);
//         console.log(teacher);
//         res.render("updateForm.ejs", { teacher });
//     } catch (err) {
//         next(err);
//     }
// });

// Update Route
app.patch("/teacher", async (req, res, next) => {
    try {
        let { name, branch, classesAlloted, phone, subjects, createdAt, passingYear, isActive } = req.body;

        let updatedTeacher = await Teacher.findByIdAndUpdate(
            id,
            {
                name: name,
                branch: branch,
                classesAlloted: classesAlloted,
                phone: phone,
                subjects: subjects,
                createdAt: createdAt,
                passingYear: passingYear,
                isActive: isActive
            }, 
            { new: true, runValidators: true }
        );

        res.json({ teacher: updatedTeacher });
    } catch (err) {
        res.send({success: false, message: err.message});
    }
});


// Delete Route
app.delete("/teacher/:id", async (req, res, next) => {
    try {
        let { id } = req.params;
        await Teacher.findByIdAndDelete(id);
        res.json({ message: "Deleted successfully" });
    } catch (err) {
        res.send({success: false, message: err.message});
    }
});

// Route to Get Form to Add New Teacher
app.get("/addNewTeacher", (req, res) => {
    res.render("addTeacher.ejs");
});

// Add Route
app.post("/newTeacher", async (req, res, next) => {
    try {
        let {name, branch, classesAlloted, phone, subjects,createdAt, passingYear, isActive, email,password} = req.body;
        let teacher = new Teacher({
            name : name,
            branch : branch,
            classesAlloted : classesAlloted,
            phone : phone,
            subjects : subjects,
            createdAt : createdAt,
            passingYear : passingYear,
            isActive : isActive,
            email : email,
            password : password
        });
        await teacher.save();
        res.json({ message: "Saved successfully" });
    } catch (err) {
        res.send({success: false, message: err.message});
    }
});

// Error Handling Middleware
// app.use((err, req, res, next) => {
//     let { status = 500, message = "Some error occurred" } = err;
//     res.status(status).send(message);
// });

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});


let teacher1 = new Teacher({
    name : "Shivansh",
    branch: "IT",
    classesAlloted : [5,6,7],
    phone: "91xxxxxxxx",
    subjects: ["maths","English"],
    createdAt :"12-02-2025",
    passingYear: 2027,
});
// let teacher1 = new Teacher({
    
//                 name : "Arjun",
//                 branch : "IT",
//                 classesAlloted : [5,9,11],
//                 phone: "91xxxxxxxx",
//                 subjects: ["maths"],
//                 passingYear: 2026,
//                },  
// );

// let allteacher = [
//        {
//         name : "Pratham",
//         branch : "IT",
//         classesAlloted : [9,10,11],
//         phone: "91xx567890",
//         subjects: ["Maths,Physics"],
//         passingYear: 2026,
//        },

//        {
//         name : "Pravesh",
//         branch : "CE",
//         classesAlloted : [7,8,9],
//         phone: "91xxxxxxxx90",
//         subjects: ["English"],
//         passingYear: 2027,
//        },
//        {
//         name : "Saurya",
//         branch : "EE",
//         classesAlloted : [12],
//         phone: "91x67xxx87",
//         subjects: ["physics"],
//         passingYear: 2028,
//        },
//        {
//         name : "Satyam",
//         branch : "IT",
//         classesAlloted : [8,9],
//         phone: "91xx452378",
//         subjects: ["chemistry"],
//         passingYear: 2026,
//        },
//        {
//         name : "sanyam",
//         branch : "EE",
//         classesAlloted : ["Nursery","1st"],
//         phone: "91xxxxxxxx",
//         subjects: ["all subjects"],
//         passingYear: 2028,
//        },
//        {
//         name : "Arjun",
//         branch : "CE",
//         classesAlloted : [3,4],
//         phone: "91xxxxxxxx",
//         subjects: ["maths","English"],
//         passingYear: 2027,
//        },   
// ];

// teacher1.save()
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });
// Teacher.insertMany(allteacher).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });
// Teacher.findByIdAndDelete("67ab4cbacad9f638fc945976")
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })