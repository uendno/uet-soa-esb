var express = require('express');
var request = require('request');
var app = express()

app.get('/:name', function (req, res) {
    request('http://localhost:8081/hello/' + req.params.name, (error, response, body) => {
        if (error) {
            res.status(400).send(error.message);
        } else {
            res.send(body);
        }
    })
})

app.listen(3000);