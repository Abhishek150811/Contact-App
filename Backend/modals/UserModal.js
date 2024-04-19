const mongoose = require('mongoose') 

const UserModal = new  mongoose.Schema({
    fullName : {
        type : String , 
        required : [true , 'A user must have a name']
    },
    email : {
        type : String , 
        required : [true , ''],
    }, 
    password : {
        type : String , 
        required : [true , "A user must have a password"]
    }
})

const User = new mongoose.model("User" , UserModal) 

module.exports = User ; 