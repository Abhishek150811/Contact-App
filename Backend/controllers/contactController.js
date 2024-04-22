const mongoose = require('mongoose')
const Contact = require('../modals/contactModal')

exports.getAllContacts = async (req , res , next)=>{
    try{
        const users = await Contact.find() ; 
        res.status(200).json({
            status : 'Success' , 
            length : users.length , 
            data : users
        })
    }catch(err){
        console.log("Error occured in getting entire contact list")
    }
    
}

exports.getContacts = async( req , res , next)=>{
    try {
        const users = await Contact.findOne({admin : req.body.id}) ; 
        res.status(200).json({
            status : 'Success' , 
            length : users.length , 
            data : users 
        })
    }catch(err){
        console.log("Error in gettling all contact list")
    }

}

exports.createContact = async (req , res , next)=>{
    try{
        const user = await Contact.create({
            firstName : req.body.firstName , 
            LastName : req.body.lastName , 
            email : req.body.email , 
            dateOfBirth : req.body.dateOfBirth , 
            phoneNumber : req.body.phoneNumber , 
            admin :  req.body.id 
        })
        res.status(200).json({
            status : 'Success' ,
            data : user 
        })
    }
    catch(err){
        console.log("Error occured while creating a new Contact") ; 
    }
}

exports.updateContact = async(req , res , next)=>{
    try {
        const data = req.body.details ; 
        const user = await Contact.findOneAndUpdate({_id : req.body.id} , data ,  {
            new : true 
        } )
        res.status(200).json({
            status : 'Success' , 
            data : user
        })
    }
    catch(err){
        console.log("Error occured while updating the details of the contact") ; 
    }
}

exports.deleteContact = async(req , res , next)=>{
    try{
        await Contact.deleteOne({_id : req.body.contactId}) ; 
        res.status(200).json({
            status : 'Success' , 
            message : 'Contact deleted successfully'
        })
    }
    catch(err){
        console.log("Error occured while deleting a docuement") ; 
    }
}