const mysql = require('promise-mysql');
const path = require('path');
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    connectionLimit: 5,
    waitForConnections: true,
    queueLimit: 0
});

module.exports = pool;