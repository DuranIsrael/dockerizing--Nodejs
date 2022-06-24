var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send("Docker docker demo done!");
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('example app listening http://%s:%s', host, port);
})