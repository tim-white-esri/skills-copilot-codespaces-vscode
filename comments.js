// Create web server application
// Run server with node comments.js
// Access in browser at http://localhost:3000

// Require modules
var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');

// Create server
http.createServer(function (request, response) {
    // Get path name from request url
    var pathname = url.parse(request.url).pathname;
    // Get extension from path name
    var extname = path.extname(pathname);
    // Get file name from path name
    var filename = pathname.substr(1);
    // Get file type from extension
    var type = getContentType(extname);
    // Read file
    fs.readFile(filename, function (err, data) {
        // If file not found
        if (err) {
            // Return error 404
            response.writeHead(404, { 'Content-Type': 'text/html' });
            response.write('404 Not Found');
        } else {
            // Return file contents
            response.writeHead(200, { 'Content-Type': type });
            response.write(data.toString());
        }
        // Send response
        response.end();
    });
}).listen(3000);

// Get content type from extension
function getContentType(extname) {
    switch (extname) {
        case '.html
