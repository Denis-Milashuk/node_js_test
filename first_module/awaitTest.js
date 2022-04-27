function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Timeout')
            resolve(x);
        }, 2000);
    });
}

async function f1() {
    var x = await resolveAfter2Seconds(10);
    console.log(x); // 10
}
f1();
console.log('Main thread completed')