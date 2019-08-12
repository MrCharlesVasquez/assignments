const express = require("express")
const apparelRouter = express.Router()
const Apparel = require("../models/apparel.js")

// Get All
apparelRouter.get( "/", ( req, res, next ) => {
    Apparel.find({ user: req.user._id }, ( err, apparel ) => {
        if(err){
            res.status(500)
            return next (err)
        }
        return res.status(200).send( apparel )
    })
})

//  Get One accessory by User
apparelRouter.get("/:_id", (req, res, next) => {
    Apparel.findOne(
        { _id: req.params._id, user: req.user._id }, 
        (err, foundApparel) => {
            if(err){
                res.status(500)
                return next(err)
            }
            if(!foundApparel){
                res.status(404)
                return next(new Error("No apparel item found"))
            }
            res.status(200).send(foundApparel)
        }
    )
})


// Post
apparelRouter.post( "/", (req, res, next ) => {
    req.body.user = req.user._id
    const newApparel = new Apparel(req.body)
    newApparel.save(( err, savedApparel ) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedApparel)
    }) 

})

// Delete One - Delete
apparelRouter.delete( "/:_id", ( req, res, next ) => {
    Apparel.findOneAndRemove({ _id: req.params._id }, ( err, deletedApparel ) => {
        if(err){
            res.status(500)
            return res.send(err)
        }
        return res.status(202).send({ accessory: deletedApparel, 
            msg: `Successfully deleted ${deletedAccessories.name}` })
    })
})

// Update One - PUT
apparelRouter.put( "/:_id", ( req, res, next ) => {
    Apparel.findOneAndUpdate({ _id: req.params._id}, req.body, { new: true}, 
        (err, updatedApparel) => {
        if(err){
            res.status(500)
            return res.status(201).send(updatedApparel)
        }
    })
})

module.exports = apparelRouter