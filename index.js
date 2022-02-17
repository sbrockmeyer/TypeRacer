const express = require ('express');
const pug = require('pug');
const path = require('path');
const routes = require('./routes/routes');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');

const app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, '/public')));
app.use(cookieParser('whatever'));

app.use(expressSession({
    secret: 'c001b34n5',
    saveUninitialized: true,
    resave: true
}));

// const newUserUrlParser = express.urlencoded({extended: false});


app.get('/', routes.index);
app.get('/leaderboard', routes.leaderboard);

app.listen(3000);