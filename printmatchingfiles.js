var fs = require('fs')
var path = require('path')

module.exports = function printMatchingFiles(fileList, ext, callback) {
	var fileExt = '.' + ext;
	fs.readdir(fileList, function(err, list) {
		if (err) {
			callback(err, null);
		} else {
			let retArray = [];
			for (f = 0; f < list.length; f++) {
				if (fileExt == path.extname(list[f])) {
					retArray.push(list[f]);
				}
			}
			callback(null, retArray);
		};
	});
};
