import dotenv from 'dotenv';
dotenv.config({ path: './config.env' });  

import express from 'express'; 

// IMPORTS
import router from './routes/routes.js';

const app = express();

app.use(express.json());

const port = process.env.PORT;

app.use('/', router);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${port}`);
});