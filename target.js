var fs = require("fs");

var data = fs.readFileSync('textfile.txt');

console.log(data.toString());

console.log("===================================");

const users = require("./jsonfile.json");

console.log(users);

console.log("===================================");

var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('htmlfile.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);


console.log("Succesfully reading completed!!");