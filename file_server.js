var http = require("http");
var fs = require("fs");

let portNumber = process.argv[2];
let filePath = process.argv[3];

var server = http.createServer(function(req, res) {
	let content = "";
	let f = fs.createReadStream(filePath);
	f.on("data", function(data) {
		content += data;
	});
	f.on("end", function(data) {
		res.end(content);
	});
})
server.listen(portNumber)
