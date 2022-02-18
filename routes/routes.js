const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

mongoose.connect('mongodb+srv://username:pass_word@pro150.rgfcp.mongodb.net/TypeRacerDB?retryWrites=true&w=majority', {
    // useUnifiedTopology: true,
    // newUserUrlParser: true
});

let mdb = mongoose.connection;
mdb.on('error', console.error.bind(console, 'connection error'));
mdb.once('opne', callback => { });

let userSchema = mongoose.Schema({
    username: String,
    password: String,
});

let User = mongoose.model('Users_Collection', userSchema)

exports.index = (req, res) => {
    res.render('index', {
        title: 'Home Page'
    });
};

exports.leaderboard = (req, res) => {
    res.render('leaderboard', {
        title: 'Leaderboard Page'
    });
};

exports.signup = (req, res) => {
    res.render('signup', {
        title: 'Sign Up'
    });
};

exports.createUser = (req, res) => {
    let user = new User({
        username: req.body.username,
        password: req.body.password
    });
    user.save((err, user) => {
        if (err) return console.error(err);
        console.log(req.body.username + ' added.');
    });
    res.redirect('/');
};