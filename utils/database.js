/** import mysql module */
let mysql = require('mysql');
let pool;
/**database connection */
module.exports = {
    getPool: function () {
        if (pool) return pool;
        pool = mysql.createPool({
            host: '127.0.0.1',
            user: 'root',
            port: '3307',
            password: "",
            database: 'sample'
        });
        return pool;
    }
};