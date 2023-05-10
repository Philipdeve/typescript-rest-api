import express, { Request, Response, Router } from 'express';
import { createStudent } from '../controllers/userController';


const router: Router = express.Router();

router.route('/new-students').post(createStudent);

export default router;
