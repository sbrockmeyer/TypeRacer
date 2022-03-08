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

app.get('/', routes.game);
app.get('/leaderboard', routes.leaderboard);
app.get('/login', routes.login);
app.get('/create', routes.create);
app.post('/create', urlencodedParser, routes.createUser);

app.listen(3000);