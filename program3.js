var fs = require('fs');

var fileContent = fs.readFileSync(process.argv[2]);
var str = fileContent.toString().split('\n');
var newLines = (str.length - 1);

console.log(newLines);
