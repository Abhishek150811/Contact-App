const mongoose = require('mongoose') 

const UserModal = new  mongoose.Schema({
    phoneNumber : {
        type : String , 
        required : [true , 'You must have a phone number'],
        unique : true , 
        minLength : 10 ,
    }, 
    fullName : {
        type : String , 
        default : "" , 
    },
    otp :{
        type : Number , 
        default : -1 , 
    }, 
    timeToLive : {
        type : Number , 
        default : Date.now() + 10 * 60 * 1000 , 
    }
    
})

const User = new mongoose.model("User" , UserModal) 

module.exports = User ; 