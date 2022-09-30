
var fs = require('fs');

var readableStream = fs.createReadStream('./data1/sample.txt');
readableStream.setEncoding('utf-8');

var data = '';

readableStream.on('data', (chunks) => {
    data += chunks;
})

readableStream.on('error', (error) => {
    console.log(`Error Message: ` + error.message);
})

readableStream.on('end', () => {
    console.log(data);
    console.log('Ended..');
})