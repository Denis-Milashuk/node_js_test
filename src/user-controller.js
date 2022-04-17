const db = require('./postgres/postgresConnector')

const getUsers = async (req, res) => {
    if (req.params.id){
        let response = await db.query('SELECT * FROM users WHERE id = $1', [req.params.id])
        res.send(response.rows)
        return;
    }
    let response = await db.query('SELECT * FROM users')
    res.send(response.rows);
}

const createUser = async (req, res) => {
    const user = req.body
    const slq = `INSERT INTO users (id, name) VALUES ('${user.id}', '${user.name}')`
    await db.query(slq)
    res.send(user);
}

module.exports = {
    getUsers,
    createUser
}