// Create web server
// 1. Load the http module
var http = require('http');
var fs = require('fs');
var url = require('url');
var querystring = require('querystring');
var comments = [];
var server = http.createServer(function (req, res) {
    // 2. Create an HTTP server to handle responses
    // 3. Return the following response to any request
    // res.writeHead(200, {'Content-Type': 'text/plain'});
    // res.end('Hello World\n');
    // 4. Parse the request to determine what the user is asking for
    var url_parts = url.parse(req.url);
    var query = querystring.parse(url_parts.query);
    console.log(url_parts);
    console.log(query);
    console.log(req.method);
    if (url_parts.pathname === '/') {
        switch (req.method) {
            case 'GET':
                show(res);
                break;
            case 'POST':
                add(req, res);
                break;
            default:
                badRequest(res);
        }
    } else {
        notFound(res);
    }
});
server.listen(8000);
console.log('Server running at http://
