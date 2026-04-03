import mysql from 'mysql2/promise';

// Extract credentials from environment variables
const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD_B64 
        ? Buffer.from(process.env.DB_PASSWORD_B64, 'base64').toString('utf-8') 
        : process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
};

// Global pool so we don't create multiple pools in development mode (hot reloading)
let pool: mysql.Pool;

declare global {
    var mysqlPool: mysql.Pool | undefined;
}

if (process.env.NODE_ENV === 'development') {
    if (!global.mysqlPool) {
        global.mysqlPool = mysql.createPool(dbConfig);
    }
    pool = global.mysqlPool;
} else {
    pool = mysql.createPool(dbConfig);
}

export { pool };
