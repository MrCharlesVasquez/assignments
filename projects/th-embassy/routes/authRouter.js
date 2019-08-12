const express = require('express')
const authRouter = express.Router()
const User = require("../models/UserModel.js")
const jwt = require('jsonwebtoken')



//Sign up, Login // Authenticate the user // Create and send a token

authRouter.post("/signup", (req, res, next) => {

    User.findOne(
        { username: req.body.username }, (err, user) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            if (user) {
                res.status(400)
                return next(new Error("The username or password already exists."))
            }
            
            const newUser = new User(req.body)
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



authRouter.post("/login", (req, res, next) => {
    User.findOne(
        { username: req.body.username.toLowerCase() }, (err, user) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            // Does a user by the username exist
            if (!user) {
                res.status(403)
                return next(new Error("Username or Password are incorrect"))
            }
            // Does th user's password match
            user.checkPassword(req.body.password, (err, isMatch) => {
                if (err) {
                    res.status(401)
                    return next(err)
                }
                if (!isMatch) {
                    res.status(401)
                    return next(new Error("Username or Password are incorrect"))
                }
                //At this point the user exists and their password matches
                // So create the token and send the successful response
                const token = jwt.sign(user.withoutPassword(), process.env.SECRET)
                return res.status(200).send({ token, user: user.withoutPassword() })
            })

        })
})

module.exports = authRouter