console.log(process.pid)

let timerId = setInterval(() => {
    console.log(`Process ${process.pid} is working`)
}, 3000)

setTimeout(() => {
    clearInterval(timerId)
    console.log(`Process ${process.pid} was stopped`)
}, 10000)