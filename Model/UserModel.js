const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    userName:{
        type:String
    },
    userEmail:{
        type:String,
        unique:true
    },
    userPassword:{
        type:String,
        unique:true
    }
},
{timestamps:true}
)

const userModel = mongoose.model("userDetails",userSchema)
module.exports = userModel