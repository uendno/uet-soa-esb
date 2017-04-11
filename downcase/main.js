var express = require('express')
var app = express()

app.get('/', function (req, res) {
    res.send(req.query.string ? req.query.string.toLowerCase() : "");
})

app.listen(3002);