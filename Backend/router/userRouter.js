const express = require('express')
const UserController = require('../controllers/UserController')

const router = express.Router() ; 

router.route('/login' , UserController.loginUser) ;


module.exports = router ; 