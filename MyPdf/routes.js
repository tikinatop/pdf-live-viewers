var app = require('express')();
var fs = require('fs');
app.get("/wew", function(req,res){
    var lul = String(Math.floor(Math.random()*8000));
    setTimeout(function(){
        res.redirect(200,"heh/"+lul);
    },500);
});


app.get("/heh/:random", function(req,res){
    res.send("this is some meme "+ req.params.random);
    setTimeout(function(){
        console.log("WEW MAD");
        console.log(req.params.random);
    res.redirect(200,"/wew");
    },8000);
});


app.listen(1455, function(req,res){
    console.log("listening...");
});


