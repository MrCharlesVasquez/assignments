const mongoose = require("mongoose")
const Schema = mongoose.Schema

const apparelSchema = new Schema ({
    name: {
        type: String,
        required: true,
    },
    category:{
        type: String,
        enum: ['unisex', 't-shirt', 'hat', 'bottom','outerwear', 'hoody', 'longsleeve', 'zip-up'],
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    imgUrl: {
        type: String,
        required: true

    } 
})

module.exports = mongoose.model( "Apparel" , apparelSchema )