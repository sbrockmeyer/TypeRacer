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
});

// connection.connect();

//code here what needs to go into the sql

//connection.end();

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