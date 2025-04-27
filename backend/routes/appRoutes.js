import express from 'express'
import getHeader from '../controller/app/getHeader.js';
import {getTopmentor,getCoordi} from '../controller/app/getTopmentor.js';
import {getEventById,getTopEvents,getNewEvents,getpastEvents} from '../controller/app/getevents.js';
import {getnewAnnouncement,getpastAnnouncement,getmyAnnouncement} from '../controller/app/getAnnouncement.js';
import getTestmorals from '../controller/app/getTestmorals.js';
import {getAllMentor,getAllAlumni,getAllFaculty,SearchMembers} from '../controller/app/getAllMentor.js';
import contactcontroller from '../controller/app/contactcontroller.js';
import getmyMentor from '../controller/app/getmyMentor.js';
import {getAllMemories,getAllNews,getGalleryById} from '../controller/app/gallery.js'
const appRoutes = express.Router();
appRoutes.get('/header',getHeader );
appRoutes.get('/top-mentor',getTopmentor )
appRoutes.get('/coordi',getCoordi )
appRoutes.get('/events',getTopEvents)
appRoutes.get('/events/new',getNewEvents)
appRoutes.get('/events/past',getpastEvents)
appRoutes.post('/events/id',getEventById)
appRoutes.get('/announcement/new',getnewAnnouncement )
appRoutes.get('/announcement/past',getpastAnnouncement )
appRoutes.post('/announcement/id', getmyAnnouncement )
appRoutes.get('/testimorals', getTestmorals);
appRoutes.get('/mentor/all', getAllMentor);
appRoutes.post('/member/search', SearchMembers);
appRoutes.get('/alumni/all', getAllAlumni);
appRoutes.get('/faculty/all', getAllFaculty);
appRoutes.post('/mentor/my', getmyMentor);
appRoutes.post('/contact', contactcontroller);
appRoutes.get('/memories', getAllMemories);
appRoutes.get('/newspaper', getAllNews);
appRoutes.get('/gallery/:id', getGalleryById);
export default appRoutes