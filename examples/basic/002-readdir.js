var fs = require('fs');
var dir = '.';

if ( process.argv[2] ) dir = process.argv[2];

var files = fs.readdirSync(dir);
for (i in files) {
  console.log(files[i]);
}
