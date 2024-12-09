// IMPORTS

import { getTasks, createTask, updateTask, deleteTask, getTask } from '../database/database.js';

export const getTasksHandler = async (req, res) => {
    const tasks = await getTasks();
    res.status(200).json({ msg: 'success', data: tasks });
};

export const createTaskHandler = async (req, res) => {
    const { task } = req.body;
    console.log(task);
    const newTask = await createTask(task);
    res.status(201).json({ msg: 'success', data: newTask });
};

export const getTaskHandler = async (req, res) => {
    const id = req.params.id;
    const task = await getTask(id);
    res.status(200).json({ data: task });
}

export const updateTaskHandler = async (req, res) => {
    const { task } = req.body;
    const id = req.params.id;
    await updateTask(task, id);
    res.status(200).json({ msg: 'Task successfully edited' });
};

export const deleteTaskHandler = async (req, res) => {
    const id = req.params.id;
    await deleteTask(id);
    res.status(204).json({ msg: 'successfully deleted' });
}; 