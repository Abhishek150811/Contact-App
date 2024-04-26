const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
    phoneNumber : {
        type : String , 
        required : [true , 'For verifiying it is important to have a phone number']
    }, 
    otp : {
        type : String , 
    }, 
    timeToLive : {
        type : Date , 
        default : Date.now() + 15 * 60 * 1000 , 
    },
})

const Otp = new mongoose.model('Otp' , otpSchema) ; 

module.exports = Otp ; 