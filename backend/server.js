import express from 'express';
import cors from 'cors';
import 'dotenv/config';

// app config
const app = express();
const port = process.env.PORT ||4000


//  middleware
app.use(cors());
app.use(express.json());

//  APIs endpoints
// console.log("admin router",adminRouter)
// app.use('/api/admin',adminRouter);
// app.use('/api/doctors',doctorsRouter)
// localhost:4000/api/admin/add-doctor

app.get('/', (req,res)=>{
    res.send('Api is working')
});
app.listen (port, ()=>console.log("server is started",port));