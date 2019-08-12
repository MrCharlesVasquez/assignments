const express = require("express")
const accessoriesRouter = express.Router()
const Accessories = require("../models/accessories.js")


// Get All
accessoriesRouter.get( "/", ( req, res, next ) => {
    Accessories.find({ user: req.user._id },( err, accessories ) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(accessories)
    })
})


//  Get One accessory by User
accessoriesRouter.get("/:_id", (req, res, next) => {
    Accessories.findOne(
        { _id: req.params._id, user: req.user._id }, 
        (err, foundAccessories) => {
            if(err){
                res.status(500)
                return next(err)
            }
            if(!foundAccessories){
                res.status(404)
                return next(new Error("No accessory item found"))
            }
            res.status(200).send(foundAccessories)
        }
    )
})


// Post one
accessoriesRouter.post( "/", ( req, res, next ) => {
    const newAccessories = new Accessories(req.body)
    newAccessories.save(( err, savedAccessories) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedAccessories)
    })
})


// Delete One - Delete
accessoriesRouter.delete( "/:_id", ( req, res, next ) => {
    Accessories.findOneAndRemove({ _id: req.params._id }, ( err, deletedAccessories ) => {
        if(err){
            res.status(500)
            return res.send(err)
        }
        return res.status(202).send({ accessory: deletedAccessories, 
            msg: `Successfully deleted ${deletedAccessories.name}` })
    })
})

// Update One - PUT
accessoriesRouter.put( "/:_id", ( req, res, next ) => {
    Accessories.findOneAndUpdate({ _id: req.params._id}, req.body, { new: true}, 
        (err, updatedAccessories) => {
        if(err){
            res.status(500)
            return res.status(201).send(updatedAccessories)
        }
    })
})

module.exports = accessoriesRouter