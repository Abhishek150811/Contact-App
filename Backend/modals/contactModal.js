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
    dateOfBirth : {
        type : Date , 
    },
    phoneNumber : {
        type : String , 
        required : [true , 'Phone Number of a person is required'] ,
        unique : true , 
        minLength : 10 ,
        maxLength: 10,
        match: /^\+91[6-9]\d{9}$/
    }, 
    admin : {
        type : mongoose.Schema.ObjectId , 
        required : [true , 'A user must have a parent admin']
    }

})

const Contact = new mongoose.model('Contact' , contactSchema) ;

module.exports = Contact