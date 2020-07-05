const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

// Start Mongodb
// /home/tlaskey/Desktop/mongodb/bin/mongod --dbpath=/home/tlaskey/Desktop/mongodb-data

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('server is up on port', port)
})