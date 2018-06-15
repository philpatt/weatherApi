var express = require('express');
var router = express.Router();
var request = require('request');
router.get('/', function(req, res){
    console.log('SEARCH', req.query.location)
    
})

module.exports = router;