import express from 'express';
import { testConnection } from './config/database.js';

const app = express();
app.use(express.json());

testConnection()
    .then(() => {
        const PORT = 3333;
        app.listen(PORT, () => {
            console.log(`server runing on port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(`failed to start server: ${error}`);
    });
