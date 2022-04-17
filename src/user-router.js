const Router = require('../webFramework/Router')
const router = new Router();
const userController = require('./user-controller')

router.get('/users', (req, res) => {
    userController.getUsers(req, res)
})
router.post('/users', (req, res) => {
    userController.createUser(req, res)
})

router.get('/', (req,res) => {
    res.writeHead(200, {
        'Content-type': 'text/html; charset=utf-8'
    })
    res.end('<h1> The server is working</h1>')
})

module.exports = router