const mysql = require('mysql');

var connection = mysql.createConnection({
    host : 'localhost',
    user : 'me',
    password : 'secret',
    database : 'type_racer_db'
});

connection.connect();

//code here what needs to go into the sql


connection.end();
