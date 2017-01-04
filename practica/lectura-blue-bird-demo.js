var fs = require('fs');
var Promise = require('bluebird');

Promise.promisifyAll(fs);

fs.readFile('./data1.json', 'utf-8', function (error, data) {

    if (error) {
        console.error('error al leer json');
    }
    else {
        try {
            data = JSON.parse(data);
            console.log(data.name);
        }
        catch (e) {
            console.error('error al leer json');
        }
    }
});

fs.readFileAsync('./data1.json')
    .then(JSON.parse)
    .then(function (val) {
        console.log(val);
    }).catch(SyntaxError, function (e) {
        console.log('Error de sintaxis:', e);
    }).catch(function (e) {
        console.log('Error general:', e)
    })
