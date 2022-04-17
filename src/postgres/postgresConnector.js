const { Client } = require('pg')

const client = new Client ({
    user: 'postgres',
    host: 'localhost',
    database: 'nodejs',
    password: '466128',
    port: 5432,
})
client.connect(err => {
    if (err) {
        console.error('connection error', err.stack)
    } else {
        console.log('connected')
    }
})

module.exports = {
    query: (sql, params) => client.query(sql, params)
}