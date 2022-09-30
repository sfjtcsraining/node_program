
var emitter = require('events').EventEmitter;
var eventEmitter = new emitter();

// Subscribing an event for Raising only onces by Publisher
eventEmitter.once('FirstEvent', (message) => {
    console.log(`First Event Message: ${message}`);
})

// Raising an event
eventEmitter.emit('FirstEvent', "You are raising First Event. One"); // Printed
eventEmitter.emit('FirstEvent', "You are raising First Event. Two");
eventEmitter.emit('FirstEvent', "You are raising First Event. Three");
eventEmitter.emit('FirstEvent', "You are raising First Event. Four");