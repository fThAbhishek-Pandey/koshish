import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import ConnectCloudinary from './config/cloudinary.js';
import ConnectDB from './config/connectMongodb.js';
import coCirculerRoutes from './routes/coCirculerRoutes.js';
import coordinaterRoutes from './routes/coordinaterRoutes.js';
import teacherRoutes from './routes/teacherRoutes.js';
import userRoutes from './routes/userRoutes.js';
ConnectDB()
ConnectCloudinary()
// app config
const app = express();
const port = process.env.PORT || 4000


//  middleware
app.use(cors());
app.use(express.json());

//  APIs endpoints
// console.log("admin router",adminRouter)
app.use('/api/user',userRoutes);
app.use('/api/teacher',teacherRoutes)
app.use('/api/cocirculer',coCirculerRoutes)
app.use('/api/coordinate',coordinaterRoutes)
// localhost:4000/api/admin/add-doctor

app.get('/' ,   (req,res)=>{
    res.send('Api is working')
});
app.listen (port, ()=>console.log("server is started",port));