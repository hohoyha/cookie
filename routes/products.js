var products = {
    1: {title:'The history of web 1'}
    ,2: {title:'The next web'}
};

module.exports.fun = function(req, res){
    var output = '';
    var id = 0;
    for(var name in products)
    {
        id += 1;
        output += `<li>${products[name].title}
        <a href="cart/${id}">Add</a></li>`
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
    res.redirect('/cart');
}

module.exports.funCart = function(req, res){
    var cart = req.cookies.cart;
    if(!cart)
    {
        res.send('Empty');
    }else{
        var output = '';
        for(var id in cart){
            output += `<li>${products[id].title}(${cart[id]})
            <a href="deleteCart/${id}">Delete</a></li>`;
        }
    }

    res.send(`<h2>Cart</h2>
    <ul>${output}</ul>
    <a href="/products">Products List</a>
    `);
}

module.exports.funDelete = function(req, res){
    var id = req.params.id;
    var cart = req.cookies.cart;
    if(cart[id])
    {
        delete cart[id];
        res.cookie('cart', cart);
    }
    else{
       console.debug('No Item');
    }

    res.redirect('/products');
}
