const userRouter = require('./src/user-router')
const Application = require('./webFramework/Application')
const parsJson = require('./webFramework/parseJson')
const parsUrl = require('./webFramework/parsUrl')


const PORT = process.env.PORT || 5000

const application = new Application()

application.useMiddleware(parsJson)
application.useMiddleware(parsUrl('http://localhost:5000'))

application.addRouter(userRouter)
application.listen(PORT, () => console.log(`The server has started on PORT: ${PORT}`))


