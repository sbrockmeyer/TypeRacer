const mongoose = require('mongoose');
const config = require('../config');
const bcrypt = require('bcryptjs');

mongoose.connect('mongodb+srv://username:pass_word@pro150.rgfcp.mongodb.net/TypeRacerDB?retryWrites=true&w=majority',{
    // useUnifiedTopology: true,
    // newUserUrlParser: true
});

// let mdb = mongoose.connection;
// mdb.on('error', console.error.bind(console, 'connection error'));
// mdb.once('opne', callback =>{});

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