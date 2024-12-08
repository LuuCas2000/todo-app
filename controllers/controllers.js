// IMPORTS

import { getTasks, createTask, deleteTask } from '../database.js';

export const getTasksHandler = async (req, res) => {
    const tasks = await getTasks();
    res.status(200).json({ msg: 'success', data: tasks });
};

export const createTaskHandler = async (req, res) => {
    const { task } = req.body;
    console.log(task);
    const newTask = await createTask(task);
    res.status(201).json({ msg: 'success', newTask });
};

export const deleteTaskHandler = async (req, res) => {
    const id = req.params.id;
    await deleteTask(id);
    res.status(204).json({ msg: 'successfully deleted' });
};