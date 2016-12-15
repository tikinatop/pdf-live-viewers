var express = require('express'),
            fs = require('fs'),
    app = express()
;
var args = process.argv.slice(2);
var myFile = args[0]
console.log(process.cwd()+'/'+myFile);
var fyk = process.cwd()+'/'+myFile;
var port = 1455;


app.get('/*', function (req, res) {
    //fs.readFile(__dirname + filePath , function (err,data){
fs.readFile(fyk , function (err,data){
    console.log("Reading",fyk);
    res.writeHead(200, {"Content-Type": "application/pdf"});
    res.end(data);
    });

});

app.get('*', function(req,res){
    res.send("Hey buddy I think you got the wrong door, the leather club is two blocks down..");
});
        
app.listen(port, function(){
            console.log('Listening to',fyk,'on',port);
});
