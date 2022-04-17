const path = require('path')

console.log('Склейка', path.join(__dirname,'first', 'second', 'third'))
console.log('Склейка',path.join(__filename))
console.log('Обсалютный путь', path.resolve('first', 'second', 'third'))
const fullPath = path.resolve('first', 'second', 'third.js')
console.log('Распарсить в объект',path.parse(fullPath))
//=======================
const siteUrl = 'http://localhost:8080/users?id=1234'

const url = new URL(siteUrl)
console.log(url)


