import express from 'express'
import authCociculer from '../middleware/authentication/cocirculerAuth.js';
import loginCociculer from '../middleware/authentication/logincocerculer.js';
import updatecocerculerprofile from '../controller/cocirculer/cocerculer.js';
import{ addMentor, terminateMentor, AllMentor, updateMentor} from '../controller/cocirculer/mentor.js';
import { addHeader } from '../controller/cocirculer/manageHeader.js';
import { addTopMentor } from '../controller/cocirculer/TopMentor.js';
import { Addevent } from '../controller/cocirculer/event.js';
import { addtestimorals } from '../controller/cocirculer/testimorals.js';
import getcontact from '../controller/cocirculer/getcontact.js';
import upload from '../middleware/cloudimage/multer.js'
import getHeader from '../controller/app/getHeader.js';
import getTopmentor from '../controller/app/getTopmentor.js';
import getevents from '../controller/app/getevents.js';
import getAnnouncement from '../controller/app/getAnnouncement.js';
import getTestmorals from '../controller/app/getTestmorals.js';
import getAllMentor from '../controller/app/getAllMentor.js';
import contactcontroller from '../controller/app/contactcontroller.js';
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
coCirculerRoutes.get('/contact/all', authCociculer,getcontact )
coCirculerRoutes.get('/header/all',authCociculer,getHeader );
coCirculerRoutes.get('/top-mentor/all',authCociculer,getTopmentor )
coCirculerRoutes.get('/events/all',authCociculer,getevents)
coCirculerRoutes.get('/announcement/all',authCociculer,getAnnouncement )
coCirculerRoutes.get('/testimorals/all',authCociculer, getTestmorals);
coCirculerRoutes.get('/mentor/all',authCociculer, getAllMentor);
export default coCirculerRoutes