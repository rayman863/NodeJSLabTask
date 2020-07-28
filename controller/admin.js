var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('admin');    
});

router.post('/', function(req, res) {
    // res.send('post');
    if(req.body.addemp == "Add Employee"){
        res.redirect('/admin/addemployee');
    }else if(req.body.allemp == "Employee List"){
        res.redirect('/admin/allemployeelist');
    }else{
        res.render('admin');
    }
});

router.get('/addemployee', function(req, res) {
    res.render('addemployee');    
});

router.get('/allemployeelist', function(req, res) {
    res.render('allemployeelist');    
});

module.exports = router;