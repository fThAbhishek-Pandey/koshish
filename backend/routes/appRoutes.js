import express from 'express'
import getHeader from '../controller/app/getHeader.js';
import getTopmentor from '../controller/app/getTopmentor.js';
import {getTopEvents,getNewEvents,getpastEvents} from '../controller/app/getevents.js';
import {getnewAnnouncement,getpastAnnouncement,getmyAnnouncement} from '../controller/app/getAnnouncement.js';
import getTestmorals from '../controller/app/getTestmorals.js';
import getAllMentor from '../controller/app/getAllMentor.js';
import contactcontroller from '../controller/app/contactcontroller.js';
import getmyMentor from '../controller/app/getmyMentor.js';
const appRoutes = express.Router();
appRoutes.get('/header',getHeader );
appRoutes.get('/top-mentor',getTopmentor )
appRoutes.get('/events',getTopEvents)
appRoutes.get('/events/new',getNewEvents)
appRoutes.get('/events/past',getpastEvents)
appRoutes.get('/announcement/new',getnewAnnouncement )
appRoutes.get('/announcement/past',getpastAnnouncement )
appRoutes.post('/announcement/id', getmyAnnouncement )
appRoutes.get('/testimorals', getTestmorals);
appRoutes.get('/mentor/all', getAllMentor);
appRoutes.post('/mentor/my', getmyMentor);
appRoutes.post('/contact', contactcontroller);
export default appRoutes