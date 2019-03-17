const mysql = require("mysql");

const config_localhost = {
    "host"    : "localhost",
    "port"    : 3306,
    "user"    : "root",
    "password": "password",
    "database": "burgers_db"
};

const pool = mysql.createPool(process.env.JAWSDB_URL || config_localhost);

module.exports = pool;