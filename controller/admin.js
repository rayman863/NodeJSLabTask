var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('admin');    
});

router.post('/', function(req, res) {
    res.send('post');
    // if(req.body.addemp == "addemp"){
    //     res.redirect('/admin/addemployee');
    // }else if(req.body.allemp == "allemp"){
    //         res.redirect('/admin/allemployeelist');
	// }
});

module.exports = router;