var express = require('express');
var bodyParser = require('body-parser');
var login = require('./controller/login');
var app = express();

app.set('view engine', 'ejs');

app.use(bodyParser());
app.use('/login', login);
//app.use('/', login);


app.listen(3333, function(){
    console.log('express http server started at ... 3333');
});