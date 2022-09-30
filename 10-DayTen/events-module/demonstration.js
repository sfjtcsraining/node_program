
var http = require('http');
var events = require('events');
var os = require('os');

var eventEmitter = new events.EventEmitter();

let triggered = 0;
eventEmitter.once('MyEvent', () => {
    console.log(`MyEveent ${++triggered} time(s).`);
    console.log('Host Name: ' + os.hostname());
})

const server = http.createServer((req, res) => {
    eventEmitter.emit('MyEvent');
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
})

server.listen(5000, () => {
    console.log('The server is running at port 5000!!');
})