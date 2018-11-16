var http = require("http");

let urlList = [];
let results = []
let count = 0;

// rawly push the 3 arguments we need to the urlList
urlList.push(process.argv[2]);
urlList.push(process.argv[3]);
urlList.push(process.argv[4]);

function getUrlData(index) {
	http.get(urlList[index], function(response) {
		let data = {};
		data[index] = '';
		response.setEncoding("utf-8");
		response.on('error', function(err) {
			console.log(err);
		});
		response.on('data', function(chunk) {
			data[index] += chunk;
		});

		response.on('end', function() {
			results[index] = data;
			count++;
			// if we went through all arguments, print out the results
			if (count == urlList.length) {
				for (var i = 0; i < urlList.length; i++) {
					console.log(results[i][i]);
				}
			}
		});
	});
}

// go through each argument
for (var i = 0; i < urlList.length; i++) {
	getUrlData(i);
}
