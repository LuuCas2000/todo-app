import express from 'express';

const router = express.Router();

// IMPORTS
import { getTasksHandler, createTaskHandler, deleteTaskHandler } from '../controllers/controllers.js';

router.route('/')
.get(getTasksHandler);

router.route('/task/create')
.post(createTaskHandler);

router.route('/task/delete/:id')
.delete(deleteTaskHandler);

export default router;