const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    firstName : {
        type : String , 
        required : [true , 'First Name of a person is required']
        
    }, 
    lastName : {
        type : String , 
        required : [true , 'Last Name of a person is required']
    },
    email : {
        type : String , 
    },
    dateOFBirth : {
        type : Date , 
    },
    phoneNumber : {
        type : String , 
        required : [true , 'Phone Number of a person is required'] ,
        unique : true , 
    }

})

const Contact = new mongoose.model('Contact' , contactSchema) ;

module.exports = Contact