import express from 'express'
import authCociculer from '../middleware/authentication/cocirculerAuth.js';
import loginCociculer from '../middleware/authentication/logincocerculer.js';
import updatecocerculerprofile from '../controller/cocirculer/cocerculer.js';
import{ addMentor, terminateMentor, AllMentor,getMentorById, updateMentorById,TopMentor} from '../controller/cocirculer/mentor.js';
import { addHeader,updateHeader,AllHeader,HeaderChange,HeaderById } from '../controller/cocirculer/manageHeader.js';
import { Addevent,updateEvent,hideEvent,EventById,topEvent,AllEvents,deleteById } from '../controller/cocirculer/event.js';
import { addtestimorals,updatetestimorals,Alltestimorals,testimoralsById,TerminateTestimorals } from '../controller/cocirculer/testimorals.js';
import getcontact from '../controller/cocirculer/getcontact.js';
import upload from '../middleware/cloudimage/multer.js'
import {CreateAnnouncement,UpdateAnnouncement,hideAnnouncement,getNewsAll,getNewsById } from '../controller/cocirculer/announcement.js';
import {UpdateGallery,DeleteGallery ,AddGallery,getAllGallery,getGalleryById} from '../controller/cocirculer/gallery.js'
const coCirculerRoutes = express.Router();
coCirculerRoutes.post('/login', loginCociculer);

// coCirculerRoutes.get('/auth', authCociculer);
coCirculerRoutes.patch('/update/cocirculer-profile', authCociculer, updatecocerculerprofile);
// Mentor
coCirculerRoutes.post('/mentor/add', authCociculer,upload.single('image'),addMentor )
coCirculerRoutes.get('/mentor/u/:id', authCociculer,getMentorById )
coCirculerRoutes.patch('/mentor/update/:id', authCociculer,upload.single('image'),updateMentorById )
coCirculerRoutes.patch('/mentor/terminate/:id', authCociculer,terminateMentor )
coCirculerRoutes.patch('/mentor/top/:id', authCociculer,TopMentor )
coCirculerRoutes.get('/mentor/all', authCociculer, AllMentor)

// event
coCirculerRoutes.post('/event/add', authCociculer,upload.single('image'),Addevent)
coCirculerRoutes.patch('/event/update/:id', authCociculer,upload.single('image'),updateEvent)
coCirculerRoutes.put('/event/hide/:id', authCociculer,hideEvent)
coCirculerRoutes.put('/event/top/:id', authCociculer,topEvent)
coCirculerRoutes.delete('/event/delete/:id', authCociculer,deleteById)
coCirculerRoutes.get('/events/all', authCociculer,AllEvents)
coCirculerRoutes.get('/event/view/:id', authCociculer ,EventById)
// contact
coCirculerRoutes.get('/contact/all', authCociculer,getcontact )
// header
coCirculerRoutes.post('/header/add', authCociculer,upload.single('image'),addHeader)
coCirculerRoutes.patch('/header/update/:id', authCociculer,upload.single('image'),updateHeader)
coCirculerRoutes.get('/header/all',authCociculer,AllHeader );
coCirculerRoutes.get('/header/view/:id',authCociculer,HeaderById );
coCirculerRoutes.patch('/header/hide/:id',authCociculer,HeaderChange );
// announcement
coCirculerRoutes.get('/announcement',authCociculer,getNewsAll )
coCirculerRoutes.post('/announcement/add',authCociculer,upload.single('image'),CreateAnnouncement )
coCirculerRoutes.patch('/announcement/update/:id',authCociculer,upload.single('image'),UpdateAnnouncement )
coCirculerRoutes.patch('/announcement/hide/:id',authCociculer,hideAnnouncement )
coCirculerRoutes.get('/announcement/view/:id',authCociculer,getNewsById )
// testimonial
coCirculerRoutes.post('/testimorals/add', authCociculer,upload.single('image'),addtestimorals )
coCirculerRoutes.patch('/testimorals/update/:id', authCociculer,upload.single('image'),updatetestimorals )
coCirculerRoutes.get('/testimorals/view/:id', authCociculer,testimoralsById )
coCirculerRoutes.patch('/testimorals/change/:id', authCociculer,TerminateTestimorals )
coCirculerRoutes.get('/testimorals',authCociculer, Alltestimorals);
// Gallery
coCirculerRoutes.get('/gallery',authCociculer, getAllGallery);
coCirculerRoutes.post('/gallery/add',authCociculer,upload.any(), AddGallery);
coCirculerRoutes.get('/gallery/:id',authCociculer, getGalleryById);
coCirculerRoutes.patch('/gallery/update/:id',authCociculer,upload.any(), UpdateGallery);
coCirculerRoutes.delete('/gallery/delete/:id',authCociculer, DeleteGallery);
export default coCirculerRoutes