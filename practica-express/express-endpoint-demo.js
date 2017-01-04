var express = require('express');
var fs = require('fs');
var app = express();

app.use('/message', function (request, response) {
    console.log('Peticion de endpoint');
    response.send('RESPONDO¡');
});

app.use('/users', function (request, response) {

    fs.readFile('./data1.json', 'utf-8', function (error, data) {
        response.send(data);
    });

});

app.listen(3000);