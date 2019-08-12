const express = require("express")
const app = express() 
const morgan = require("morgan")
const mongoose = require("mongoose")
const expressJwt = require("express-jwt")
const PORT = process.env.PORT || 7000
require("dotenv").config()



// Middleware for every request
app.use( express.json() )
app.use( morgan("dev") )

// DB connection
mongoose.connect("mongodb://localhost:27017/th-embassy", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
})
    .then( () => console.log("We are connected to TH.EMBASSY Data Base"))
    .catch( err => console.log(err))

// GateKeeper. Checks for a token on request to /api
// if there is a token , it will create the req.user object
// if there is not a token, it will throw an "UnauthorizedError"
app.use("/api", expressJwt({ secret: process.env.SECRET})) 

// Routes
app.use("/api/apparel", require("./routes/apparelRouter"))
app.use("/api/accessories", require("./routes/accessoriesRouter"))
app.use("/auth", require("./routes/authRouter.js"))




// Global Error Handling
app.use((err, req, res, next) => {
    console.error(err)
    if( err.name === "! Unauthorized Error ! Global letdown"){
        res.status( err.status )
    }  
        return res.send({ errMsg: err.message })
})


// Listening
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})