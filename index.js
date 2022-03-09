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

app.use(cookieParser('whatever'));
// app.get('/', (req, res) => {
//     let cookie = req.cookies.login
//     res.cookie('login',`Last visited: ${new Date().toDateString()} ${new Date().toTimeString()}`)
//     res.render('login', {
//         title:'Login',
//         cookie
//     });
// });

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
//         res.redirect('/');
//     }
// };

// app.post('/', urlencodedParser, routes.loginUser);
// app.get('/', (req, res) => {
//     let cookie = req.cookies.logout
//     res.cookie('logout',`Last visited: ${new Date().toDateString()} ${new Date().toTimeString()}`)
//     res.render('logout', {
//         title:'Logout',
//         cookie
//     });
// });

// app.get('/private', checkAuth, (req, res) => {
//     let cookie = req.cookies.private
//     res.cookie('private',`${new Date().toDateString()} ${new Date().toTimeString()}`)
//     res.send(`
//     <br />
//     Welcome ${req.session.user.user.username}.
//     <br />
//     <p>
//     ${'Last visit: ' + cookie}
//     </p>
//     <br />
//     <a href='/edit'>Edit Account Info</a>
//     <br />
//     <br />
//     <br />
//     <form action="/logout">
//         <input type="submit" value="Log Out" />
//     </form>
//     `);
// });

// app.get('/logout', (req, res) => {
//     req.session.destroy(err => {
//         if(err) {
//             console.log(err)
//         } else {
//             res.redirect('/');
//         }
//     });
// });

app.get('/', routes.game);
app.get('/leaderboard', routes.leaderboard);
app.get('/login', routes.login);
app.get('/create', routes.create);
app.post('/create', urlencodedParser, routes.createUser);

app.listen(3000);