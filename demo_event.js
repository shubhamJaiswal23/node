//using ES module syntax
import { EventEmitter } from 'events';

const myEmitter = new EventEmitter();

myEmitter.on('scream', () => {
  console.log('I hear a Scream!');
});

myEmitter.emit('scream');
