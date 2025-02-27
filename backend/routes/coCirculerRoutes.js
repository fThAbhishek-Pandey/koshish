import express from 'express'
import authCociculer from '../middleware/authentication/cocirculerAuth.js';
import loginCociculer from '../middleware/authentication/logincocerculer.js';
import updatecocerculerprofile from '../controller/cocirculer/cocerculer.js';
import{ addMentor} from '../controller/cocirculer/mentor.js';
import upload from '../middleware/cloudimage/multer.js'
const coCirculerRoutes = express.Router();
coCirculerRoutes.post('/login', loginCociculer);
// coCirculerRoutes.get('/auth', authCociculer);
coCirculerRoutes.patch('/update/cocirculer-profile', authCociculer, updatecocerculerprofile);
coCirculerRoutes.post('/add-mentor', authCociculer,upload.single('image'),addMentor )
export default coCirculerRoutes