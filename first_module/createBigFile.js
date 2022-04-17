const fs = require('fs')
const path = require("path");



for (let i = 0; i < 500000; i++) {
    let text = "Repeatable text for big file."
    fs.appendFileSync(path.resolve(__dirname, 'bigFile.txt'), text, err => {
        if (err) throw err;
    })
}

