var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	//res.render('index', { title: 'Express i have mine' });
	res.send('hello');
});

module.exports = router;
