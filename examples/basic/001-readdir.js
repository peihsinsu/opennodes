var fs = require('fs')
var files = fs.readdirSync('.');
for ( i in files ) {
  console.log(files[i]);
}
