import express from 'express'
import getHeader from '../controller/app/getHeader.js';
import getTopmentor from '../controller/app/getTopmentor.js';
import getevents from '../controller/app/getevents.js';
import getAnnouncement from '../controller/app/getAnnouncement.js';
const appRoutes = express.Router();
appRoutes.get('/header',getHeader );
appRoutes.get('/top-mentor',getTopmentor )
appRoutes.get('/events',getevents)
appRoutes.get('/announcement',getAnnouncement )
export default appRoutes