import express from 'express'
import authCociculer from '../middleware/authentication/cocirculerAuth.js';
import loginCociculer from '../middleware/authentication/logincocerculer.js';
import updatecocerculerprofile from '../controller/cocirculer/cocerculer.js';
import{ addMentor, terminateMentor, AllMentor, updateMentor} from '../controller/cocirculer/mentor.js';
import { addHeader } from '../controller/cocirculer/manageHeader.js';
import { addTopMentor } from '../controller/cocirculer/TopMentor.js';
import { Addevent } from '../controller/cocirculer/event.js';
import { addtestimorals } from '../controller/cocirculer/testimorals.js';
import upload from '../middleware/cloudimage/multer.js'
const coCirculerRoutes = express.Router();
coCirculerRoutes.post('/login', loginCociculer);
// coCirculerRoutes.get('/auth', authCociculer);
coCirculerRoutes.patch('/update/cocirculer-profile', authCociculer, updatecocerculerprofile);
coCirculerRoutes.post('/mentor/add', authCociculer,upload.single('image'),addMentor )
coCirculerRoutes.patch('/mentor/update', authCociculer,upload.single('image'),updateMentor )
coCirculerRoutes.patch('/mentor/terminate', authCociculer,terminateMentor )
coCirculerRoutes.get('/mentor/all', authCociculer, AllMentor )
coCirculerRoutes.post('/addheader', authCociculer,upload.single('image'),addHeader)
coCirculerRoutes.post('/addtopmentor', authCociculer,upload.single('image'),addTopMentor)
coCirculerRoutes.post('/addevent', authCociculer,upload.single('image'),Addevent)
coCirculerRoutes.post('/addtestimorals', authCociculer,upload.single('image'),addtestimorals )
export default coCirculerRoutes