const EventEmitter = require('events');

class CustomEvent extends EventEmitter {}

const ce = new CustomEvent();

// 只触发一次
ce.once('test', () => {
  console.log('test event');
});

setInterval(() => {
  ce.emit('test');
}, 500);