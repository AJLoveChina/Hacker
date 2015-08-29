// node G:\nodejs\2.ajax.save.keys.js
var http = require('http'),
    fs = require('fs'),
    path = require('path'),
    url = require('url');
http.createServer(function (req, res) {
    var query = url.parse(req.url).query,
        fileName = "./2.ajax.save.keys.txt";
    if (query === null) {
        res.end('1');
        return 0;
    }
    fs.appendFile(path.join(__dirname, fileName), query + '\n', function (err) {
        if (err) res.end('0');
        res.end('1');
    });
}).listen(520, '127.0.0.1');
console.log("I am running...");