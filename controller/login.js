var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('login');    
});

router.post('/', function(req, res) {
    if(req.body.uname == "admin"){
        res.redirect('/admin');
    }else if(req.body.uname == "employee"){
        res.redirect('/emp');
	}else{
		res.send('invalid username/password');
	}
});

module.exports = router;