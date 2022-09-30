// To get the reference of event module
var events = require('events');

// To create an object of EventEmitter class 
var eventEmitter = new events.EventEmitter();

// (Subscriber) Creating `FirstEvent` Event and Receive Some Data
eventEmitter.on('FirstEvent', (message) => {
    console.log(`First Event Message: ${message}`);
})

// (Subscriber) Creating `SecondEvent` Event and receive some data
eventEmitter.on('SecondEvent', (message) => {
    console.log(`Second Event Message: ${message}`);
})

// (Publisher) Raise `FirstEvent` Event and send some data
eventEmitter.emit('SecondEvent', "You are raising Second Event.");
// (Publisher) Raise `FirstEvent` Event and send some data
eventEmitter.emit('FirstEvent', "You are raising First Event.");


