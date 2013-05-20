var fs = require('fs');
var fileName='/etc/hosts';

var s = process.binding('fs').stat(fileName);

console.log(s);

/*
try {
  fs.readFileSync(fileName, "utf8");
} catch (e) {

  if(e.code = 'ENOENT')
    return false;
  console.log(e);
  console.log(JSON.stringify(e));
}
*/
