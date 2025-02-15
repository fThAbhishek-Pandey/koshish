import express from 'express'
import authCociculer from '../middleware/authentication/cocirculerAuth.js';
import loginCociculer from '../middleware/authentication/logincocerculer.js';
import updatecocerculerprofile from '../controller/cocirculer/updatecocerculerprofile.js';
const coCirculerRoutes = express.Router();
coCirculerRoutes.post('/login', loginCociculer);
// coCirculerRoutes.get('/auth', authCociculer);
coCirculerRoutes.get('/update/cocirculer-profile', authCociculer, updatecocerculerprofile);
export default coCirculerRoutes