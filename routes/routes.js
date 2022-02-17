
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