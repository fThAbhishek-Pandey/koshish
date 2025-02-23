import express from 'express'
const coordinaterRoutes = express.Router();
import loginCoordinater from '../middleware/authentication/coordinatorLogin.js';
import authCoodinater from '../middleware/authentication/coordinaterAuth.js';
import changecocirculer from '../controller/coordinator/cocicular.js';
import upload from '../middleware/cloudimage/multer.js'
console.log("photoUpload: ",upload.single('image'))
coordinaterRoutes.post('/login', loginCoordinater);
// coordinaterRoutes.get('/auth', authCoodinater);
coordinaterRoutes.post('/change-cociculer', authCoodinater,upload.single('image'), changecocirculer);
export default coordinaterRoutes