var express = require('express')
var app = express()
var passport = require('passport')
var session = require('express-session')
var bodyParser = require('body-parser')
var env = require('dotenv')
var exphbs = require('express-handlebars')

 
//For BodyParser
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
 
 
// For Passport
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
 
 
// //For Handlebars
// app.set('views', './app/views')
// app.engine('hbs', exphbs({
//     extname: '.hbs'
// }));
// app.set('view engine', '.hbs');
 
app.engine(`handlebars`, exphbs({ defaultLayout: `main` }));
app.set(`view engine`, `handlebars`);
 
app.get('/', function(req, res) {

    res.render('login');

});
app.get('/signup', function(req, res) {

    res.render('signup');

 
});
app.get('/dashboard', function(req, res) {

    res.render('dashboard');

 
});

app.get('/logout', function(req, res) {

    res.render('logout');

 
});

 
//Models
var models = require("./app/models");

 
//Routes
 
var authRoute = require('./app/routes/auth.js')(app, passport);
 
 
//load passport strategies
 
require('./app/config/passport/passport.js')(passport, models.user);
 
app.use(express.static(__dirname +'/public'))
//Sync Database
 
models.sequelize.sync().then(function() {
 
    console.log('Nice! Database looks fine')
 
 
}).catch(function(err) {
 
    console.log(err, "Something went wrong with the Database Update!")
 
});
 
 const PORT = process.env.PORT || 3000
app.listen(PORT , function(err) {
 
    if (!err)
 
        console.log("Site is live");
         
    else console.log(err)
 
});