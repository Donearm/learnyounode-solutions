var http = require("http");

const portNumber = process.argv[2];

var server = http.createServer(function(req, res) {
	if (req.method == 'POST') {
		let body = '';
		req.on('data', function (data) {
			body += data;
			if (body.length > 1e6) { // 1e6 = 1000000 = 1MB
				// Too big a body, interrupt the connection
				req.connection.destroy();
			}
		});
		req.on('end', function() {
			res.end(body.toUpperCase());
		});
	} else {
		return res.end("send a POST request please\n");
	}
})
server.listen(portNumber)
