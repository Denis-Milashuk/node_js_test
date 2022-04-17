const fs = require('fs')
const path = require("path");

setTimeout(() => {
    console.log('8 - Set timeout has been finished')// Fifth, macro task after ~ 10-15 sec
}, 0)

new Promise(resolve => {
    console.log('1 - Promise is working.') // First, primary process
    let text;
    let startCycle = Date.now()
    console.log('2 - Cycle is started')
    for (let i = 0; i < 15000000; i++) {
        text += "Repeatable text for big file."
    }
    console.log(`3 - Cycle is finished: ${Date.now() - startCycle}`)
    let start = Date.now()
    for (let i = 1; i <= 7; i++) {
        // if ( i === 7 ) {
        //     fs.appendFile(path.resolve(__dirname, `bigFile-${i}.txt`), text, err => {
        //         if (err) throw err;
        //         console.log('i: ' + i + ' - ' + (Date.now() - start))
        //         console.log(`Now resolve: ${Date.now() - start}`)
        //         resolve(text)
        //     })
        // } else {
            fs.appendFile(path.resolve(__dirname, `bigFile-${i}.txt`), text, err => {
                if (err) throw err;
                console.log('i: ' + i + ' - ' + (Date.now() - start))
            })
        // }
    }
    console.log(`4 - Now resolve: ${Date.now() - start}`)
    resolve(text)
})
    .then((text) => console.log(`6 - First then block + ${text.length}`))// Third, micro task
    .then(() => console.log('7 - Second then block'))// Forth, micro task

console.log('5 - Finish') // Second, primary process

