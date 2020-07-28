var express = require('express');
var bodyParser = require('body-parser');
var login = require('./controller/login');
var admin = require('./controller/admin');
var emp = require('./controller/emp');
var app = express();

app.set('view engine', 'ejs');

app.use(bodyParser());
app.use('/login', login);
app.use('/admin', admin);
app.use('/emp', emp);
//app.use('/', login);


app.listen(3333, function(){
    console.log('express http server started at ... 3333');
});