const express = require('express');
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

//app.use(cookieParser('whatever'));

let urlencodedParser = bodyParser.urlencoded({
    extended: true
});

app.use(expressSession({
    secret: 'c001b34n5',
    saveUninitialized: true,
    resave: true
}));

// const checkAuth = (req, res, next) => {
//     if (req.session.user && req.session.user.isAuthenticated) {
//         next();
//     } else {
//         res.redirect('/login');
//     }
// }

app.get('/', routes.home);
app.get('/game', routes.game);
app.get('/leaderboard', routes.leaderboard);

app.get('/create', routes.create);
app.post('/create', urlencodedParser, routes.createUser);

app.get('/login', (req, res) => {
    //let cookie = req.cookies.login
    //res.cookie('login',`Last visited: ${new Date().toDateString()} ${new Date().toTimeString()}`)
    res.render('login', {
        title: 'Login',
        //cookie
    });
});

app.post('/login', urlencodedParser, routes.loginUser);

// app.get('/private', checkAuth, (req, res) => {
//     res.send(`
//     Authorized access: Welcome ${req.session.user.username}.
//     <br />
//     <a href='/logout'>Log out</a>
//     `);
// });

app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            console.log(err)
        } else {
            res.redirect('/login');
        }
    });
});

app.listen(3000);