import express from 'express'
const coordinaterRoutes = express.Router();
import loginCoordinater from '../middleware/authentication/coordinatorLogin.js';
import authCoodinater from '../middleware/authentication/coordinaterAuth.js';
import changecocirculer from '../controller/coordinator/changecociculer.js';
coordinaterRoutes.post('/login', loginCoordinater);
// coordinaterRoutes.get('/auth', authCoodinater);
coordinaterRoutes.post('/change-cociculer',authCoodinater, changecocirculer);
export default coordinaterRoutes