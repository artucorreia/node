import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '5432'),
});

export async function testConnection() {
    try {
        const client = await pool.connect();
        console.log('database connection created successfully');
        client.release();
    } catch (error) {
        console.log(`error creating database connection: ${error}`);
        process.exit(1);
    }
}

export default pool;
