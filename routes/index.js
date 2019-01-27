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
	fs.readFile('./share_config.txt', 'utf-8', function(err, data){
		//outString = data.toString();
		console.log(data);
	});
	res.send(outString);
});

module.exports = router;
