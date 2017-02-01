var express = require('express');
var cookieParser = require('cookie-parser');
var count = require('./routes/count');

var app = express();
app.use(cookieParser());

app.get('/count', count.count);

app.listen(3000, function(req, res){
    console.log('Connected 3003 port');
});