import express from 'express'
const coordinaterRoutes = express.Router();
import loginCoordinater from '../middleware/authentication/coordinatorLogin.js';
import authCoodinater from '../middleware/authentication/coordinaterAuth.js';
coordinaterRoutes.post('/login', loginCoordinater);
coordinaterRoutes.get('/auth', authCoodinater);
export default coordinaterRoutes