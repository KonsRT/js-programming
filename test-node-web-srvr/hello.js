// load HTTP module 
const http = require("http");

const hostname = "127.0.0.1";
const port = 8000;

// Create HHTP Server 
const server = http.createServer(function(req,res) {
    res.writeHead(200, {"Content-Type": "text/plain"});
    // Send the responce body "Hello there!"
    res.end("Hello there!\n");
});

// Print the log once the server starts listening
server.listen(port, hostname, function() {
    console.log(`Server running at http://${hostname}:${port}`);
});