const express = require(express)
const app = express()
const morgan = require("morgan")  // must npm i morgan 
const mongoose = require("mongoose") // must npm i mongoose
const expressJwt =require("express-jwt")
const PORT = process.env.PORT || 7000

// middlware fire on every request
app.use (morgan('dev'))
app.use(express.json())

// DB connect

mongoose.connect ('mongodb://localhost:27017/auth-practice', {
    useNewUrlParser:true, 
    useFindAndModify:false,
    useCreateIndex: true

})

// routes
app.use("api", expressJwt({secret: }))
app.use("/auth", require("./routes/authRouter.js"))

// Error Handler
app.use((err, req, res, next) =>{
    console.error(err)
    return res.send({errMsg: err.message})
})

