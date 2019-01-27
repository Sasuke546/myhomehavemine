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

router.get('loginIn', function(req,res){
	
	console.log(req.body);

	

});

module.exports = router;
