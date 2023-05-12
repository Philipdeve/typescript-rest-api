import express, { Request, Response, Router } from 'express';
import { createStudent, getAllStudents, updateStudent, deleteStudent } from '../controllers/userController';


const router: Router = express.Router();

router.route('/students').post(createStudent);
router.route('/students').get(getAllStudents);
router.route('/students/:name').put(updateStudent);
router.route('/students/:name').delete(deleteStudent);

export default router;
