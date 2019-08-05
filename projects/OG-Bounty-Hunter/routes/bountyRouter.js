const express = require('express');
const bountyRouter = express.Router();
const uuid = require('uuid/v4');
const bountyData = require("./bountyData.json");
const Bounty = require('../models/bountyModel.js')

// Mongoose: Get All
bountyRouter.get("/", (req, res, next) => {
    Bounty.find((err, bounty) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounty)
    })
})
// Get One - GET
bountyRouter.get("/:_id", (req, res, next)=>{
    Bounty.findOne({_id: req.params._id}, (err, foundBounty)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(foundBounty)
    })
})

// Delete One _ DELETE
 bountyRouter.delete("/_id", (req, res, next)=>{
     Bounty.findOneAndRemove({ _id: req.params._id}, (err, deletedBounty)=>{
         if(err)
            res.statusMessage(500)
            return next(err)
     })
     return res.status(202).send(
        {
         bounty: deletedBounty,
         msg: `Successfully deleted ${deletedBounty.firstName}`
        }
     )
 })

 // Updated One - PUT
 bountyRouter.put("/_id", (req, res, next)=>{
     Bounty.findOneAndUpdate(
         {_id: req.params._id},
         req.body,
         {new: true},
         (err, updatedBounty)=>{
             if(err){
                 res.status(500)
                 return next(err)
             }
             return res.send(201).send(updatedBounty)
         }
     )
 })

// POST - insert One
bountyRouter.post("/", (req, res, next) => {
    const newBounty = new Bounty(req.body)
    newBounty.save((err, saveBounty) => {
        if (err) {
            res.status(500)
            return next(err).send(saveBounty)
        }
        return res.status(201).send(saveBounty)
    })
})

module.exports = bountyRouter


// let bounty = bountyData;



// bountyRouter.get("/bounty", (req, res) => {
//     res.send(bounty)
// })

// bountyRouter.get("/bounty/:_id", (req, res) => {
//     const foundBounty = bounty.find(bounty => bounty._id === req.params._id)
//     res.send(foundBounty)
// })

// bountyRouter.post("/bounty/", (req, res) => {
//     const newBounty = req.body
//     newBounty._id = uuid()
//     bounty.push(newBounty)
//     res.send(newBounty)
// })

// bountyRouter.delete("/bounty/:_id", (req, res) => {
//     const foundBounty = bounty.find(bounty => bounty._id === req.params._id)
//     updatedDB = bounty.filter(bounty => bounty._id !== req.params._id)
//     bounty = updatedDB
//     res.send(`Successfully deleted ${foundBounty.firstName} ${foundBounty.lastName}!`)

// })

// bountyRouter.put("/bounty/:_id", (req, res) => {
//     const foundBounty = bounty.find(bounty => bounty._id === req.params._id)
//     const updateObj = req.body
//     const updatedBounty = Object.assign(foundBounty, updateObj)
//     const updatedDB = bounty.map(bounty => bounty._id === req.params._id ? updatedBounty : bounty)
//     bounty = updatedDB
//     res.send(updatedBounty)

// })

