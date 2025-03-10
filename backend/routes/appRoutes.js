import express from 'express'
import getHeader from '../controller/app/getHeader.js';
import getTopmentor from '../controller/app/getTopmentor.js';
import getevents from '../controller/app/getevents.js';
import getAnnouncement from '../controller/app/getAnnouncement.js';
import getTestmorals from '../controller/app/getTestmorals.js';
import getAllMentor from '../controller/app/getAllMentor.js';
import contactcontroller from '../controller/app/contactcontroller.js';
const appRoutes = express.Router();
appRoutes.get('/header',getHeader );
appRoutes.get('/top-mentor',getTopmentor )
appRoutes.get('/events',getevents)
appRoutes.get('/announcement',getAnnouncement )
appRoutes.get('/testimorals', getTestmorals);
appRoutes.get('/mentor/all', getAllMentor);
appRoutes.post('/contact', contactcontroller);
export default appRoutes