// To get the reference of event module
var events = require('events');

// To create an object of EventEmitter class 
var eventEmitter = new events.EventEmitter();

// (Subscriber) Creating an Event
eventEmitter.on('FirstEvent', () => {
    console.log('First Event Raised.');
})

// (Publisher) Raise an Event
eventEmitter.emit('FirstEvent');