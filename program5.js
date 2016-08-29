var fs = require('fs');

var directory = process.argv[2];
var extension = process.argv[3].toString();

function filterByExtension(value){
  if (value.includes("." + extension)) {
    return value;
  }
}

fs.readdir( directory, function (err, files) {
	if (!err) {
    var specificFiles = files.filter(filterByExtension);
    for(i = 0; i < specificFiles.length; i++){
      console.log(specificFiles[i]);
    }

  } else {
		throw err;
  }
});
