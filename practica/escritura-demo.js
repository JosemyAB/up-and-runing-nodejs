var fs = require('fs');

var josemyString = '{"name": "Josemy"}';
fs.writeFile('josemy.json', josemyString);

var josemyStringify = {name: "Josmey-JSON"};

fs.writeFile('josemy-stringify.json', JSON.stringify(josemyStringify));


