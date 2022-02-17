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

app.get('/', routes.index);
app.get('/leaderboard', routes.leaderboard);

const web = app.listen(3000, function (){
    console.log('Node web server is running');
})

// app.listen(3000);