const dotenv = require('dotenv')
dotenv.config()

console.log(process.pid);
console.log(process.env.PORT);
console.log(process.env.NODE_ENV);
let obj = {
    a:0,
    b:3
}
const obj2 = {
    ...obj,
    c:3
}
let a = 'asd'
function fun (string) {
    string = string.toUpperCase()
}
let d = 3
d.toString()
fun(a)
console.log(a)
// process.exit()