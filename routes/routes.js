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
    timesplayed: Number,
    wpm: Number
});

let User = mongoose.model('Users_Collection', userSchema);

exports.home = (req, res) => {
    res.render('home', {
        title: 'Home Page'
    });
};

exports.game = (req, res) => {
    res.render('game', {
        title: 'Type Racer'
    });
    
};

exports.leaderboard = (req, res) => {
    User.find((err, user) => {
        if (err) return console.error(err);
        res.render('leaderboard', {
            title: 'Leaderboard',
            allUsers: user
        })
    })
};

exports.login = (req, res) => {
    res.render('login', {
        title: 'Login'
    });
};

exports.create = (req, res) => {
    res.render('Create', {
        title: 'Create Account'
    });
};

exports.createUser = (req, res) => {
    //let salt = bcrypt.genSaltSync(10);
    //let hashPass = bcrypt.hashSync(req.body.password, salt);
    let user = new User({
        username: req.body.username,
        // password: hashPass
        password: req.body.password
    });
    user.save((err, user) => {
        if (err) return console.error(err);
        console.log(req.body.username + ' added.');
    });
    res.redirect('/login');
};

exports.loginUser = (req, res) => {
    User.findOne({ username: req.body.username, password: req.body.password })
    .then(user => {
        // if (user && bcrypt.compareSync(req.body.password, user.password)) {
        if (user) {
            req.session.user = {
                isAuthenticated: true,
                user
            }
            
            res.redirect('/game');
        } else {
            console.log('Invalid login');
            res.redirect('/login');
        }
    });
};