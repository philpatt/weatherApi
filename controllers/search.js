require('dotenv').load();
var express = require('express');
var router = express.Router();
var request = require('request');


router.get('/', function(req, res){
    var qs = req.query.location;
    var APPID = process.env.API_KEY;
    request('http://api.openweathermap.org/data/2.5/forecast?q=' + qs +',us&mode=json&APPID='+APPID, function(error, resposne, body){
        res.send(body)
    })
})

module.exports = router;