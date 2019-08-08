const express = require("express")
const app = express() 
const morgan = require("morgan")
const mongoose = require("mongoose")
const expressJwt = require("express-jwt")
const PORT = process.env.PORT || 7000

// Middleware for every request
app.use( express.json() )
app.use( morgan("dev") )

// Database connection
mongoose.connect("mongodb://localhost:27017/th-embassy", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
})
    .then( () => console.log("We are connected to TH.EMBASSY Data Base"))
    .catch( err => console.log(err))


// Routes
app.use("/apparel", require("./routes/apparelRouter"))
app.use("/accessories", require("./routes/accessoriesRouter"))



// Global Error Handling
app.use((err, req, res, next) => {
    console.error(err)
    if( err.name === "! Unauthorized Error ! Global Meltdown"){
        res.status( err.status )
    }  
        return res.send({ errMsg: err.message })
})


// Listening
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})