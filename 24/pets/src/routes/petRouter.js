import { Router } from 'express';
import { getOne, save, update } from "../controllers/petController.js";
import validateName from '../middlewares/validateName.js';

const petRouter = Router();

petRouter.post('/', save);
petRouter.get('pet', validateName, getOne);
petRouter.put('pet', validateName, update);

export default petRouter;
