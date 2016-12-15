var express = require('express'),
            fs = require('fs'),
    app = express()
;
var port = 1455;
var args = process.argv.slice(2);
var myFile = args[0]
console.log(process.cwd()+'/'+myFile);
var fyk = process.cwd()+'/'+myFile;


app.get('/*', function (req, res) {
    var aidee = Math.floor(Math.random()*8000);
    //fs.readFile(__dirname + filePath , function (err,data){
fs.readFile(fyk , function (err,data){
    console.log("Reading",fyk);
    res.writeHead(200, {"Content-Type": "application/pdf","X-Foo": aidee});
    res.end(data);
    });
fs.watchFile(fyk, (curr, prev) => {
    console.log(`the current mtime is: ${curr.mtime}`);
    console.log(`the previous mtime was: ${prev.mtime}`);
    //    res.redirect('/'+aidee);
});

app.get('*', function(req,res){
    res.send("Hey buddy I think you got the wrong door, the leather club is two blocks down..");
});
        
});
app.listen(port, function(){
    console.log('Listening to %s on port %s => %s...',fyk,port,port+1);
});
