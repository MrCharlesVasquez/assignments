const mongoose = require("mongoose");
const Schema = mongoose.Schema

const inventorySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    price: {
        type:Number,
        required: true,

    }
})

module.exports = mongoose.model("Inventory", inventorySchema)