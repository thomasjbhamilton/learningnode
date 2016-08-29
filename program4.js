var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function(err, contents) {
  if (err) {
      return console.error(err);
  }
  var str = contents.split('\n');
  var newLines = (str.length - 1);
  console.log(newLines);
});
