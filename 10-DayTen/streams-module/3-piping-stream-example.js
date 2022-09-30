
var fs = require('fs');

var reableStream = fs.createReadStream('./data/a.txt');

var writableStream = fs.createWriteStream('./data/b.txt');

reableStream.pipe(writableStream);

console.log('Ended');

