let cluster;
cluster = require('cluster');
const os = require('os')

console.log(os.platform());
console.log(os.arch());
console.log(os.cpus().length)

const cpus = os.cpus()

if (cluster.isPrimary){
    for (let i = 0; i < cpus.length - 2; i++) {
        cluster.fork()
    }
    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} have been killed`)
        // if (code ===){
        //     cluster.fork()
        // } else {
        //     console.log(`Worker ${worker.process.pid} died`)
        // }
    })
} else {
    let timerId = setInterval(() => {
        console.log(`Process ${process.pid} is working`)
    }, 2000)
    setTimeout(() => {
        clearInterval(timerId)
        console.log(`Process ${process.pid} was stopped`)
        process.exit()
    }, 20000 * Math.random() + 3000)
}