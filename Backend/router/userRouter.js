const express = require('express')
const {loginUser,signUpUser,updateUser,verifyUser} = require('../controllers/UserController')
const {protect} = require('../utils/jwt.js')

const router = express.Router() ; 

router.route('/loginuser'  ).get(loginUser) ;
router.route('/verifyuser'  ).get(verifyUser) ; 
router.route('/signupuser' ).get(signUpUser) ; 
router.route('/me').put(protect, updateUser)


module.exports = router ; 