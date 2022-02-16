var mysql = require('mysql');

var connection = mysql.createConnection({
    host : 'localhost',
    user : 'me',
    password : 'secret',
    database : 'type_racer_db'
});

connection.connect(function(err) {
    // if (err) throw er;
    console.log("Connected!");
    // var sql = "CREATE TABLE user (firstName VARCHAR(255), score Int)";
    // connection.query(sql, function(err, result){
    //     // if (err) throw (err);
    //     console.log("Table Created")
    // });

    // var add = "INSERT INTO user (firstName, score) VALUES(Jannet, 4)";
    // connection.query(add, function(err, result){
    //     // if (err) throw err;
    //     console.log("1 record inserted");
    // });

    connection.query("SELECT * FROM user", function(err, result, fields){
        if(err) console.log(err);
        console.log(result);
    })

});

// connection.connect();

//code here what needs to go into the sql

connection.end();

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