const mongoose = require("mongoose")
const Schema = mongoose.Schema
const bcrypt = require("bcrypt")



const userSchema = new Schema({

        username: {
            type: String,
            required:true,
            unique: true,
            lowercase:true
        },
        password: {
            type:String,
            required: true
        }
})

// 1 hook , 2 mehtods.. pre is a function method previous

userSchema.pre("save", function(next){
   // console.log(this) user object
    const user = this
    if(!user.isModified("password")) return next()
    bcrypt.hash(user.password, 10, (err, hash)=>{
        if(err) return next(err)
        user.password = hash
        next()
    }) 
})

// 2 method
userSchema.methods.checkPassword = function(passwordAttempt, callback){
    bcrypt.compare(passwordAttempt, this.password, (err, isMatch) =>{
        if(err){
            return callback(err)
        }
        callback(null, isMatch)
    })
}

// password remove

userSchema.methods.withPassword = function() {
    const user = this.toObject()
    delete user.password
    return user
}

module.exports = userSchema 