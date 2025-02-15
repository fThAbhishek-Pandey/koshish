import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import bodyParser from 'body-parser';
import ConnectCloudinary from './config/cloudinary.js';
import ConnectDB from './config/connectMongodb.js';
import coCirculerRoutes from './routes/coCirculerRoutes.js';
import coordinaterRoutes from './routes/coordinaterRoutes.js';
import teacherRoutes from './routes/teacherRoutes.js';
import userRoutes from './routes/userRoutes.js';

// app config
const app = express();
ConnectDB()
ConnectCloudinary()
const port = process.env.PORT ||4000


//  middleware
app.use(cors());
app.use(express.json());
// Parse URL-encoded bodies (HTML forms)
// app.use(bodyParser.urlencoded({ extended: true }));
// Parse JSON bodies (API requests)
// app.use(bodyParser.json());

//  APIs endpoints
app.use('/api/user',userRoutes);
app.use('/api/teacher',teacherRoutes)
app.use('/api/cocirculer',coCirculerRoutes)
app.use('/api/coordinater',coordinaterRoutes)
// localhost:4000/api/admin/add-doctor
// app.post('/api/coordinater/change-cociculer', function( req,res){
    
//     try {
//         console.log("server req: ", req.body)
//         res.json({success:true, message:`check in consocle${req.body}`});
//     } catch (error) {
//         res.json({success:false, message:error.message});
//     }
   
// })
app.get('/' ,   (req,res)=>{
    res.send('Api is working')
});
app.listen (port, ()=>console.log("server is started",port));