const Emitter = require('events');

const emitter = new Emitter;
const eventFn = (a, b, c) =>{
    console.log(a + b + c)
}

emitter.on('message', eventFn)
// emitter.once() - An event can be generated only once
// emitter.removeAllListeners()
// emitter.removeListener('message', eventFn)

const MESSAGE = process.env.message || ''

if (MESSAGE) {
    emitter.emit('message', MESSAGE, 123, 'AAAAAAAAAA')
} else {
    emitter.emit('message', 'There is not arguments')
}