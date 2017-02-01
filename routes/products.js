var products = {
    1: {title:'The history of web 1'}
    ,2: {title:'The next web'}
};

module.exports.fun = function(req, res){
    var output = '';
    for(var name in products)
    {
        output += `<li>${products[name].title}</li>`
    }

    res.send(`<h2>Products</h2>
    <ul>${output}</ul> 
    <a href="/cart">Cart</a>`);
};

module.exports.funAdd = function(req, res){
    var id = req.params.id;
    if(req.cookies.cart){
        var cart = req.cookies.cart;
    }else{
        var cart = {};
    }

    if(!cart[id])
    {
       cart[id] = 0;  
    }

    cart[id] = parseInt(cart[id])+1;
    
    res.cookie('cart', cart);
    console.log(cart);
    res.send(cart);
}

module.exports.funCart = function(req, res){
    var cart = req.cookies.cart;
    if(!cart)
    {
        res.send('Empty');
    }else{
        var output = '';
        for(var id in cart){
            output += `<li>${products[id].title}(${cart[id]})</li>`;
        }
    }

    res.send(`<h2>Cart</h2>
    <ul>${output}</ul>
    <a href="/products>Products List</a>
    `);
}
