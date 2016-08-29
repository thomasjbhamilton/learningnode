var http = require('http');

http.get(process.argv[2], function callback(responce){
  responce.setEncoding("utf8").on('data', function(data) {
    console.log(data);
  });

});
