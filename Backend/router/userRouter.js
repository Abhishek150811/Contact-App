const express = require('express')
const UserController = require('../controllers/UserController')

const router = express.Router() ; 

router.route('/loginuser'  ).get(UserController.loginUser) ;
router.route('/verifyuser'  ).get(UserController.verifyUser) ; 
router.route('/signupuser' ).get(UserController.signUpUser) ; 


module.exports = router ; 