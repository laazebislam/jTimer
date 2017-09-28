var connect = require('connect');
var serveStatic = require('serve-static');
var open = require('open');
connect().use(serveStatic(__dirname)).listen(8080, function() {
    console.log('Server running on 8080...');
});
open("http://localhost:8080/test.html");