
var fs = require('fs');

var writableStream = fs.createWriteStream('./data/sampleDist.txt');

writableStream.write('Some New Data being written', 'utf-8');

writableStream.end();

writableStream.on('error', (error) => {
    console.log(`Error Message: ` + error.message);
})

writableStream.on('finish', () => {
    console.log('finished..');
})
