const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const bountySchema = new Schema ({
    firstName: String,
    lastName:String,
    living:{
        type: String,
    },

    bountyAmount:Number,
    type:String

})
                        // 1.model name,  2. model's schema
module.exports = mongoose.model("bounty", bountySchema)