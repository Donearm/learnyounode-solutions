var net = require("net");

let portNumber = process.argv[2];

var server = net.createServer(function(socket) {
	let today = new Date();
	let datestring = today.getFullYear() + "-" + ("0" + (today.getMonth() +1)).slice(-2) + "-" + ("0" + today.getDate()).slice(-2) + " " + ("0" + today.getHours()).slice(-2) + ":" + ("0" + today.getMinutes()).slice(-2) + "\n";
	socket.end(datestring);
})

server.on("error", function(err) {
	throw err;
});

server.listen(portNumber);
