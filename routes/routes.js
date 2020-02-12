//require express
var express = require('express');
var path = require('path');

//create router object
var router = express.Router();

//export router
module.exports = router;

//router for homepage
router.get('/', function(req,res){
    res.sendFile(path.join(__dirname,'../views/index.html'))
});