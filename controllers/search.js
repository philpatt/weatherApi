var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/', function(req, res){
    console.log('SEARCH', req.query.location)
    var qs = {
        q: req.query.location
    }
    request({
        url: 'http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={APIKEY}',
        q: qs
    }, function(error, resposne, body){
        console.log(body)
    })
})

module.exports = router;