const express = require('express')
const app = express()
const PORT = process.env.PORT || 7000
const morgan = require('morgan')
const mongoose = require('mongoose')




app.use(express.json())
app.use(morgan('dev'))


// connection to the DB
mongoose.connect("mongodb://localhost:27017/bountydb",
    {
        useNewUrlParser: true,    // configuration object
        useFindAndModify: true,
        useCreateIndex: true,

    })
    .then(()=> console.log("connected to the DB"))
    .catch(()=> console.error(err))

// Routes
app.use("/bounty", require("./routes/bountyRouter.js"))

// Global Error Handler ( Middleware ( next is a Method of Middleware))
app.use((err, req, res, next)=>{
    console.error(err)
    return res.send({errMsg: err.message})
})

// Server Listen
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})