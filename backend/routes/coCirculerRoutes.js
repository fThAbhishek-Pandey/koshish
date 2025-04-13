import express from 'express'
import authCociculer from '../middleware/authentication/cocirculerAuth.js';
import loginCociculer from '../middleware/authentication/logincocerculer.js';
import updatecocerculerprofile from '../controller/cocirculer/cocerculer.js';
import{ addMentor, terminateMentor, AllMentor,getMentorById, updateMentorById} from '../controller/cocirculer/mentor.js';
import { addHeader } from '../controller/cocirculer/manageHeader.js';
import { Addevent,updateEvent,hideEvent,EventById,topEvent,AllEvents } from '../controller/cocirculer/event.js';
import { addtestimorals } from '../controller/cocirculer/testimorals.js';
import getcontact from '../controller/cocirculer/getcontact.js';
import upload from '../middleware/cloudimage/multer.js'
import getHeader from '../controller/app/getHeader.js';
import {getAllEvents, getEventById} from '../controller/app/getevents.js';
import {getAllAnnouncement,getmyAnnouncement} from '../controller/app/getAnnouncement.js';
import getTestmorals from '../controller/app/getTestmorals.js';
// import getAllMentor from '../controller/app/getAllMentor.js';
import contactcontroller from '../controller/app/contactcontroller.js';
import {CreateAnnouncement,UpdateAnnouncement,hideAnnouncement } from '../controller/cocirculer/announcement.js';
const coCirculerRoutes = express.Router();
coCirculerRoutes.post('/login', loginCociculer);

// coCirculerRoutes.get('/auth', authCociculer);
coCirculerRoutes.patch('/update/cocirculer-profile', authCociculer, updatecocerculerprofile);
coCirculerRoutes.post('/mentor/add', authCociculer,upload.single('image'),addMentor )
coCirculerRoutes.get('/mentor/u/:id', authCociculer,getMentorById )
coCirculerRoutes.patch('/mentor/update/:id', authCociculer,upload.single('image'),updateMentorById )
coCirculerRoutes.patch('/mentor/terminate', authCociculer,terminateMentor )
coCirculerRoutes.get('/mentor/all', authCociculer, AllMentor)
coCirculerRoutes.post('/addheader', authCociculer,upload.single('image'),addHeader)
coCirculerRoutes.post('/event/add', authCociculer,upload.single('image'),Addevent)
coCirculerRoutes.patch('/event/update/:id', authCociculer,upload.single('image'),updateEvent)
coCirculerRoutes.patch('/event/hide/:id', authCociculer,hideEvent)
coCirculerRoutes.patch('/event/top/:id', authCociculer,topEvent)
coCirculerRoutes.get('/event/all', authCociculer,AllEvents)
coCirculerRoutes.get('/event/view/:id', authCociculer ,EventById)
coCirculerRoutes.post('/addtestimorals', authCociculer,upload.single('image'),addtestimorals )
coCirculerRoutes.get('/contact/all', authCociculer,getcontact )
coCirculerRoutes.get('/header/all',authCociculer,getHeader );
coCirculerRoutes.get('/events/all',authCociculer,getAllEvents)
coCirculerRoutes.get('/announcement/all',authCociculer,getAllAnnouncement )
coCirculerRoutes.post('/announcement/add',authCociculer,upload.single('image'),CreateAnnouncement )
coCirculerRoutes.patch('/announcement/update/:id',authCociculer,UpdateAnnouncement )
coCirculerRoutes.patch('/announcement/hide/:id',authCociculer,hideAnnouncement )
coCirculerRoutes.get('/announcement/my/:id',authCociculer,getmyAnnouncement )
coCirculerRoutes.get('/testimorals/all',authCociculer, getTestmorals);

export default coCirculerRoutes