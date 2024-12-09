import mysql from 'mysql2';

console.log(process.env.DB_HOST);

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB
}).promise();
 
export const getTasks = async () => {
    const [rows] = await pool.query('SELECT * FROM tasks');
    return rows;
}; 

export const getTask = async (id) => {
    const result = await pool.query('SELECT * FROM tasks WHERE id=?', [id]);
    return result[0];
};

export const createTask = async (task) => {
    const result = await pool.query('INSERT INTO tasks(task) VALUES(?)', [task]);
    return getTask(result[0].insertId);
};

export const updateTask = async (task, id) => {
    await pool.query('UPDATE tasks SET task=? WHERE id=?', [task, id]);
    return;
};

export const deleteTask = async (id) => {
    await pool.query('DELETE FROM tasks WHERE id=?', [id])
    return;
};