var express = require('express');
var app = express();
var ejsLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');

app.use(ejsLayouts);

app.get('/', function(req, res){
    res.render('home')
});

app.use('/search', require('./controllers/search'))


app.listen(process.env.PORT || 3000)