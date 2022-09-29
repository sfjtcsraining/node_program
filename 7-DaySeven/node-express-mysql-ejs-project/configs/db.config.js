var mysql = require('mysql');

// Connecting to Database
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root@123456##",
    database: "testdb"
})

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to Database!!');
})

module.exports = connection;
