var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	var url = req.query.url;
	var outString = url + "here is the url";
  	res.render('index', { title: outString });
});

module.exports = router;
