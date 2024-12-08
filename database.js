import mysql from 'mysql2';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'R@ta38722277',
    database: 'todo_list_app'
}).promise();

export const getTasks = async () => {
    const [rows] = await pool.query('SELECT * FROM tasks');
    return rows;
};

export const getTask = async (id) => {
    const [row] = await pool.query('SELECT * FROM tasks WHERE id=?', [id]);
    return row[0];
}

export const createTask = async (task) => {
    const result = await pool.query('INSERT INTO tasks(task) VALUES(?)', [task]);
    return result;
};

export const deleteTask = async (id) => {
    await pool.query('DELETE FROM tasks WHERE id=?', [id])
    return;
};