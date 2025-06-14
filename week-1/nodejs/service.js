require('dotenv').config()

const express = require('express')
const apiRoutes = require('./router/userRoute')

// express app
const app = express()

// middleware
app.use(express.json())
app.use((req,res,next) => {
    console.log(req.path,req.method)
    next()
})

// routes
app.use('/users',apiRoutes)

// listen to request
app.listen(process.env.PORT,() => {
    console.log(`listening to port: ${process.env.PORT}...`);
})