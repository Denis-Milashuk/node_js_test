const operation = process.argv[2];
let loops = 11;
let delay = 10;
let start = process.hrtime();

function run(){
    loops--;
    for (let i = 0; i < 1e7; i++) {
        Math.pow(Math.random(), Math.random())
    }
    console.log(`${process.pid} + ${loops}`)
    if (loops > 0) {
        switch (operation) {
            case 'blocked': run(); break;
            case 'nextTick': process.nextTick(run); break;
            case 'setImmediate': setImmediate(run); break;
        }
    }
}

setTimeout(() => {
    const [seconds, nanoseconds] = process.hrtime(start);
    const msElapsed = seconds * 1000 + nanoseconds/1e6;
    console.log(`I took ${msElapsed}ms, expected to take ${delay} ms`)
}, delay)

run()
console.log('Completed')

// run:
// time node ./first_module/setImmediateAndNextTick.js blocked
// time node ./first_module/setImmediateAndNextTick.js nextTick
// time node ./first_module/setImmediateAndNextTick.js setImmediate