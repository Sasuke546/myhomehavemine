var express = require('express');
var router = express.Router();
var fs = require("fs")

/* GET home page. */
router.get('/', function(req, res) {
	var url = req.query.url;
	var outString = url + "here is the url";
  	res.render('index', { title: outString });
});

router.get('/get_config',function(req,res){
	var option = {
		encoding: 'UTF-8',
		flag: 'r'
	};
	var outString;
	/*fs.readFile('./share_config.txt', 'utf-8', function(err, data){
		if(err){
			throw err;
		}
		outString = data.toString();
		console.log(data);
	});*/

	var data = {forceupdate: 0,  moregame: 1, games: [], floatgameflag : 1,
		floatgames : [], jumpBox : 1, lockmp : 1, ignorechannels : 'gd001',
		lockshare : 0, videoTimes: 1, type: '', normal : 4, blacklist: 2,
		speedUpShare: 0, host: '', shareUrls: '', btns:[], citys:[],
		shares:[]};
	res.writeHead(200, {'Content-Type': 'application/json'});
	res.end(JSON.stringify(data));
	//res.send('here is the ' + outString);
});

router.get('/loginIn', function(req,res){
	
	console.log(req.body);

	const http = require('https');

	host = "api.weixin.qq.com";
	url = "/sns/jscode2session?appid=wxfb1e651b5de365a8&secret=e9c100e31f1c2ad90c17141587d9af4d&js_code=JSCODE&grant_type=authorization_code";

	var option = {
		host: host,
		port: 443,
		method: 'GET',
		path: url
	};

	console.log('start request');

	var retjson;

	var hReq = http.request(option, function (response) {
	        
	        console.log(response.statusCode);
	        console.log('HEADERS: ' + JSON.stringify(response.headers));

	        response.setEncoding('utf8');
			response.on('data', function (chunk) {
			    console.log('BODY: ' + chunk);

			    var jsonstr = JSON.stringify(chunk);
			    retjson = JSON.parse(jsonstr);

			});
	});

	hReq.end();

	hReq.on('error', function(e) {
	  		console.log('problem with request: ' + e.message);
	});

    var data = {code : 200,
    			sessionid : '828d2f7b5e8-027b-49be-bb45-47442e63eede',
    			openId : 'ovKTi5F9ds6tnENpGoPtKif-wGb0',
    			wxSessionkey : 'XB7EZAeh/O93uHQ5v6vMtg=='}

    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(data));

});

module.exports = router;
