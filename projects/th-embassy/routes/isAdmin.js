const express = require('express')
const authRouter = express.Router()
const User = require("../models/UserModel.js")
const jwt = require('jsonwebtoken')



//Sign up, Login // Authenticate the user as admin // Create and send a token

authRouter.post("/signup", (req, res, next) => {

    User.findOne(
        { username: req.body.username }, (err, user) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            if (user.isAdmin) {
                res.status(400)
                return next(new Error("The username or password already exists."))
            }
            const newUser = new User(req.body)
            if(req.body.admincode === "elsalvador"){
                newUser.isAdmin = true
            }
            newUser.save((err, savedUser) => {
                if (err) {
                    res.status(400)
                    return next(err)
                }
                const token = jwt.sign(savedUser.withoutPassword(), process.env.SECRET)
                return res.status(201).send({ token, user: savedUser.withoutPassword() })

            })
        })
})