var express = require('express');
var cookieParser = require('cookie-parser');
var count = require('./routes/count');
var products = require('./routes/products');

var app = express();
app.use(cookieParser());

app.get('/count', count.count);
app.get('/products', products.fun);
app.get('/cart/:id', products.funAdd);
app.get('/cart', products.funCart);

app.listen(3000, function(req, res){
    console.log('Connected 3003 port');
});