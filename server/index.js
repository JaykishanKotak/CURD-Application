import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';

import router from './routes/routes.js';
import MongoConnection from './database/mdb.js';

const app = express();


dotenv.config();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/', router);

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const PORT = '8080';

MongoConnection(USERNAME, PASSWORD);
 
app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));