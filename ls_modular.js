var printMatchingFiles = require('./printmatchingfiles.js')

var fileList = process.argv[2];
var fileExt = process.argv[3];

printMatchingFiles(fileList, fileExt, function(err, files) {
	for (f = 0; f < files.length; f++) {
		console.log(files[f]);
	}
});
