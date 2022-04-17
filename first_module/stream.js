//Readable - for read
//Writable - for write
//Duplex - for read and write
//Transform - the same as duplex, but it has ability to change data

const fileSystem = require('fs')
const path = require('path')
const http = require("http");

// fileSystem.readFile(path.resolve(__dirname, 'bigFile.txt'), ((err, data) => {
//     if (err) throw err;
//     console.log(data)
// }) )

const writableStream = fileSystem.createWriteStream(path.resolve(__dirname, 'streamsFile.txt'))
for (let i = 0; i < 200; i++) {
    writableStream.write('Row number ' + i)
}
writableStream.end()//close, destroy, on...

const readableStream = fileSystem.createReadStream(path.resolve(__dirname, 'streamsFile.txt'));
readableStream.on('data', chunk => {
    console.log(chunk)
})
readableStream.on("end", () => {
    console.log("Reading has been finished")
})
readableStream.on("open", () => {
    console.log('Reading has been started')
})

readableStream.on("error", (error) => {
    throw error
})
console.log('Finish')

http.createServer((req, res) => {
    //req - readable stream
    //res - writable stream
    const stream = fileSystem.createReadStream(path.resolve(__dirname, 'streamsFile.txt'))

    stream.on('data', chunk => res.write(chunk))
    stream.on('end', () => res.end())
    //Стрим может закончится раньше чем пользователь закончит читать поэтому вместо предыдущих 2 строчек вызываем:
    stream.pipe(res)
})