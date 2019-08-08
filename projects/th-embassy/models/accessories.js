const mongoose = require("mongoose")
const Schema = mongoose.Schema

const accessoriesSchema = new Schema ({
    name: {
        type: String,
        required: true,
        
    },
    item: {
        type: String,
        description: String,
        required: true

    },
    price:{
        type: Number,
        required: true
    }

})

module.exports = mongoose.model( "Accessories", accessoriesSchema )