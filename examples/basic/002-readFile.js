var fs = require('fs');
var fileName='/etc/hosts';
var text = fs.readFileSync(fileName, "utf8");
console.log(text);
