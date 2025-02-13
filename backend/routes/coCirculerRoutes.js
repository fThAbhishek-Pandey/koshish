import express from 'express'
import authCociculer from '../middleware/authentication/cocirculerAuth.js';
import loginCociculer from '../middleware/authentication/logincocerculer.js';
const coCirculerRoutes = express.Router();
coCirculerRoutes.post('/login', loginCociculer);
coCirculerRoutes.get('/auth', authCociculer);
export default coCirculerRoutes