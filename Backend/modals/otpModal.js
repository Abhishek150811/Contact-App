const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
    phoneNumber : {
        type : String , 
        required : [true , 'For verifiying it is important to have a phone number'],
        minLength : 10,
        maxLength: 10,
        match: /^\+91[6-9]\d{9}$/
    }, 
    otp : {
        type : String , 
    }, 
    timeToLive : {
        type : Date , 
        default : Date.now() + 15 * 60 * 1000 , 
        expires : 20 * 60 , 
    },
})

const Otp = new mongoose.model('Otp' , otpSchema) ; 

module.exports = Otp ; 