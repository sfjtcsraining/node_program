
// var events = require('events');
// var eventEmitter = new events.EventEmitter();

var emitter = require('events').EventEmitter;
var eventEmitter = new emitter();

// Subscribing an event
eventEmitter.addListener('FirstEvent', (message) => {
    console.log(`First Event Message: ${message}`);
})

// Raising an event
eventEmitter.emit('FirstEvent', "You are raising First Event.");


