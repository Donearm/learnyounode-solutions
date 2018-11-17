var http = require("http");
var url = require("url");

const portNumber = process.argv[2];

var server = http.createServer(function(req, res) {
	if (req.method == 'GET') {
		// set content-type header
		res.writeHead(200, { 'Content-Type': 'application/json' });
		const myurl = url.parse(req.url, true);
		if (myurl.pathname == '/api/parsetime') {
			let d = new Date(myurl.query.iso);
			let j = {
				hour: d.getHours(),
				minute: d.getMinutes(),
				second: d.getSeconds(),
			};
			res.end(JSON.stringify(j));
		} else if (myurl.pathname == '/api/unixtime') {
			let uTime = new Date(myurl.query.iso).getTime();
			let u = {
				unixtime: uTime,
			}
			res.end(JSON.stringify(u));
		} else {
			res.writeHead(404);
			res.end();
		}
	} else {
		return res.end("send a GET request please\n");
	}
})
server.listen(portNumber)
