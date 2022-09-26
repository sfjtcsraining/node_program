var mysql = require('mysql');

/* First Way: Connecting Node Express with mySQL */

// var connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "root@123456##"
// });

// connection.connect((err) => {
//     if (err) throw err;
//     console.log('Connected to Database');
// });

// connection.end();

/* ************************************************* */

/* Second Way: Connecting Node Express with mySQL */

// mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "root@123456##"
// }).connect((err) => {
//     if (err) throw err;
//     console.log('Connected to Database');
// });

/* *************************************************** */

/* Executing mySQL Query once the connection is established. */

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root@123456##",
    database: "testdb"
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to Database');
});

connection.query("SELECT * FROM customers", (err, result) => {
    if (err) throw err;
    console.log(result);
})

connection.end();

