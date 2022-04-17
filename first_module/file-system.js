const fs = require('fs')
// const fs = require('fs/promises')
const path = require('path')

fs.mkdirSync(path.resolve(__dirname, 'dir'))
fs.mkdirSync(path.resolve(__dirname, 'dir1',  'dir2',  'dir3'), {recursive: true})
//===============
console.log('Start');
fs.mkdir(path.resolve(__dirname, 'dir4'), err => {
    if (err){
        console.log(err)
        return
    }
    console.log('Папка создана')
})

fs.rmdir(path.resolve(__dirname, "dir4"), err => {
    if (err) {
        console.log(err)
        return
    }
    console.log('Directory deleted');
})
console.log('Finish');

fs.writeFile(path.resolve(__dirname, 'test.txt'), 'Hello', err => {
    if (err) {
        throw err
    }
    console.log('File created');
})

// fs.appendFile()

const promiseFnMkDir = async () => {
    fs.mkdir(path.resolve(__dirname, 'promiseDir'), err => {
        if (err) throw err;
    })
}
const promiseFnAppend = async (text) => {
    fs.appendFile(path.resolve(__dirname, 'promiseDir', 'promiseFile.txt'),text, err => {
        if (err) throw err;
    })
}
const promiseReadFile = async () => {
    return new Promise(((resolve, reject) => fs.readFile(path.resolve(__dirname, 'promiseDir', 'promiseFile.txt'), {encoding: "utf-8"}, (err, data) => {
        if (err) {
            reject(err.message)
        }
        resolve(data)
    })))
}

promiseFnMkDir()
    .then(() => promiseFnAppend('Hello'))
    .then(() => promiseFnAppend(' World'))
    .then(() => promiseReadFile())
    .then(data => console.log(data))
    .catch(reason => console.log(reason))

// fs.rm()