const express = require ('express');
const pug = require('pug');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes/routes');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const { urlencoded } = require('express');

const app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, '/public')));
app.use(cookieParser('whatever'));

let urlencodedParser = bodyParser.urlencoded({
    extended: true
});

app.use(expressSession({
    secret: 'c001b34n5',
    saveUninitialized: true,
    resave: true
}));

app.get('/', routes.index);
app.get('/leaderboard', routes.leaderboard);
app.get('/signup', routes.signup);
app.post('/signup', urlencodedParser, routes.createUser);

app.listen(3000);