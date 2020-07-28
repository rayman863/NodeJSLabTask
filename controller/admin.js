var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('admin');    
});

router.post('/', function(req, res) {
    // res.send('post');
    if(req.body.addemp == "addemp"){
        res.redirect('/admin/addemployee');
    }else if(req.body.allemp == "allemp"){
        res.render('allemployeelist');
	}
});

router.get('/addemployee', function(req, res) {
    res.render('addemployee');    
});

module.exports = router;