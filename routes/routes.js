import express from 'express';

const router = express.Router();

// IMPORTS
import { getTasksHandler, createTaskHandler, updateTaskHandler, deleteTaskHandler, getTaskHandler } from '../controllers/controllers.js';

router.route('/')
.get(getTasksHandler); 

router.route('/:id')
.get(getTaskHandler);

router.route('/task/create')
.post(createTaskHandler);

router.route('/task/update/:id')
.put(updateTaskHandler);

router.route('/task/delete/:id')
.delete(deleteTaskHandler);

export default router;