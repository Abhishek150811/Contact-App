const express = require('express');
const {getAllContacts , getContacts , createContact , deleteContact , updateContact} = require('../controllers/contactController')

const router = express.Router() ; 

router.route('/').get(getAllContacts)
                 .post(createContact)

router.route('/:id').patch(updateContact)
                    .delete(deleteContact)
                    .get(getContacts)

                    
module.exports = router ; 