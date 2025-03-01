import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import ConnectCloudinary from './config/cloudinary.js';
import ConnectDB from './config/connectMongodb.js';
import coCirculerRoutes from './routes/coCirculerRoutes.js';
import coordinaterRoutes from './routes/coordinaterRoutes.js';
import teacherRoutes from './routes/teacherRoutes.js';
import userRoutes from './routes/userRoutes.js';
import appRoutes from './routes/appRoutes.js';
// app config
const app = express();

ConnectDB()
ConnectCloudinary()
const port = process.env.PORT ||4000

//  middleware
app.use(cors());
// Parse JSON bodies (API requests)
app.use(express.json());
// Parse URL-encoded bodies (HTML forms)
app.use(express.urlencoded({ extended: true }));
//  APIs endpoints
app.use('/api/app',appRoutes);
app.use('/api/user',userRoutes);
app.use('/api/teacher',teacherRoutes)
app.use('/api/cocirculer',coCirculerRoutes)
app.use('/api/coordinater',coordinaterRoutes)
// app.use('/api/upload/coordinater',coordinaterRoutes)
app.get('/' ,   (req,res)=>{
    res.send('Api is working')
});
app.listen (port, ()=>console.log("server is started",port));
