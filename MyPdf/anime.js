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
    var file = fs.createReadStream(fyk,'binary');
    var stat = fs.statSync(fyk);
    res.setHeader('Content-Length',stat.size);
    res.setHeader('Content-type','application/pdf');
    //    file.pipe(res);
    res.send(file);
});

app.listen(port, function(){
            console.log('Listening to',fyk,'on',port);
});

