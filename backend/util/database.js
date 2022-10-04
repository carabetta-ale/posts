const mysql = require('mysql2');

const config = require('../config/config.json');

const pool = mysql.createPool({
    host: config.host,
    user: config.user,
    database: config.database,
    password: config.password,
});

pool.getConnection(function(err, connection) {
    if (err) {
      console.log(err);
      return;
    }
    connection.on('error', function(err) {
      console.log(err);
    });
});

module.exports = pool.promise();