// ================================================================================
// load the things we need
// ================================================================================

var express = require('express');
var app = express();

// ================================================================================
// set the view engine to ejs
// ================================================================================

app.set('view engine', 'ejs');

// ================================================================================
// ROUTES
// use res.render to load up an ejs view file
// ================================================================================

// load the static files in the public folder
var staticContentFolder = __dirname + '/public';
app.use(express.static(staticContentFolder));

// index page
app.get('/', function(req, res) {
    res.render('pages/index');
});

// portfolio page
app.get('/portfolio', function(req, res) {
    res.render('pages/portfolio');
});

// about page
app.get('/about', function(req, res) {
    res.render('pages/about');
});

// contact page
app.get('/contact', function(req, res) {
    res.render('pages/contact');
});

// cube page
app.get('/cube', function(req, res) {
    res.render('pages/cube');
});

// ================================================================================
// Start the server
// ================================================================================

var PORT = process.env.PORT || 8083;
app.listen(PORT, function(){
    console.log('Find the magic at port: ' + PORT);
})