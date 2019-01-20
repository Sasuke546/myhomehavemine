var express = require("express");
var app = express();

var https = require("https");

var fs = require('fs');

var hostName = '0.0.0.0';

var port = 8080;

var option = {
	key: fs.readFileSync('./1745548_game.jddlab.com.key'),
	cert: fs.readFileSync('./1745548_game.jddlab.com.pem')
};

var server = https.createServer(option, app, function(req,res){
	    console.log('coming');
	    res.setHeader('Content-Type','text/plain');
	    res.end("hello nodejs https");

});
server.listen(port,hostName,function(){
	    console.log(`runing on http://${hostName}:${port}`);
});


