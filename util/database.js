// const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'node_complete',
//     password: 'mySQLpassword'
// });

// module.exports = pool.promise();

//above part is automatically implemented by sequelize behinf the scenes.

const Sequelize = require('sequelize');

const sequelize = new Sequelize('node_complete', 'root', 'mySQLpassword', {
    dialect: 'mysql', 
    host: 'localhost' 
});

module.exports = sequelize;