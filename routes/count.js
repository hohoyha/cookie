module.exports.count =  function(req, res){
    if(req.cookies.count)
    {
        var count = parseInt(req.cookies.count);
    }else{
        var count = 0;
    }
    count = count + 1;
    res.cookie('count', count );
    res.send('Count: ' + count);
};