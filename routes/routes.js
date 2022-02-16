var mysql = require('mysql');

var con = mysql.createPool({
    connectionLimit: 10,
    connectTimeout: 60 *60 * 1000,
    acquireTimeout: 60 * 60 * 1000,
    timeout: 60 * 60 * 1000,
    host : 'localhost',
    user : 'me',
    password : 'secret',
    database : 'type_racer_db',
    port: 3000
});

con.getConnection(function(err) {
    if (err) console.log(err);
    console.log("Connected!");
    
    // var sql = "CREATE TABLE user (firstName VARCHAR(255), score Int)";
    // con.query(sql, function(err, result){
    //     if (err) console.log(err);
    //     console.log("Table Created");
    // });

    // var add = "INSERT INTO user (firstName, score) VALUES(Jannet, 4)";
    // con.query(add, function(err, result){
    //     if (err) console.log(err);
    //     console.log("1 record inserted");
    // });

    // con.query("SELECT * FROM user", function(err, result, fields){
    //     if(err) console.log(err);
    //     console.log(result);
    // });

});

// connection.connect();

//code here what needs to go into the sql

con.end();

const config = require('../config');

exports.index = (req, res) => {
    res.render('index', {
        title: 'Home',
        config
    });
};

exports.leaderboard = (req, res) => {
    res.render('leaderboard', {
        title: 'Leaderboard',
        config
    });
};