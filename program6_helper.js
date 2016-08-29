var fs = require('fs');

function something(directory, extension){
  fs.readdir( directory, function (err, files) {
  	if (!err) {

      var filterByExtension = function(value){
        if (value.includes("." + extension)) {
          return value;
        }
      };

      var specificFiles = files.filter(filterByExtension);
      for(i = 0; i < specificFiles.length; i++){
        console.log(specificFiles[i]);
      }

    } else {
  		throw err;
    }
  });
}

module.exports = something;
