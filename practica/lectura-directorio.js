var fs = require('fs');

fs.readdir('C:/', function(error, data) {
    console.log(data);
})